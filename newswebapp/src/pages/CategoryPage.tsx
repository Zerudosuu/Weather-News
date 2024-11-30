import { useParams } from "react-router-dom";
import { fetchCategories } from "../api/newsAPi.ts";
import { useEffect, useState } from "react";
import NewsCard from "../components/newsCard.tsx";
import styled from "styled-components";
import Carousel from "../components/Carousel.tsx";

//BreakPoints
const sizes = {
  desktop: "1024px",
  tablet: "1000px",
  mobile: "480px",
};

const media = {
  desktop: `(max-width: ${sizes.desktop})`,
  tablet: `(max-width: ${sizes.tablet})`,
  mobile: `(max-width: ${sizes.mobile})`,
};

type Article = {
  urlToImage: string;
  title: string;
  description: string;
  url: string;
  author: string;
  source: { name: string };
  publishedAt: string;
};

type Articles = {
  articles: Article[];
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [news, setNews] = useState<Articles | null>(null);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [top10Articles, setTop10Articles] = useState<Article[]>([]);

  const [authorFilter, setAuthorFilter] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    const getCategoryNews = async () => {
      try {
        const result = await fetchCategories(`${categoryName}`, "US", 40);
        setNews(result);

        // Set top 10 articles
        const top10Articles = result.articles
          .filter(
            (article: { title: string }) =>
              !article.title.startsWith("[Removed]")
          )
          .slice(0, 10);
        setTop10Articles(top10Articles);

        // Set all filtered articles initially to all articles (default view)
        setFilteredArticles(result.articles.slice(10));
      } catch (e) {
        console.error(e);
      }
    };

    getCategoryNews();
  }, [categoryName]);

  // Filter Articles
  const handleFilter = () => {
    if (!news) return;

    const filtered = news.articles.slice(10).filter((article) => {
      const matchesAuthor = authorFilter
        ? article.author?.toLowerCase().includes(authorFilter.toLowerCase())
        : true;

      const matchesSource = sourceFilter
        ? article.source.name
            ?.toLowerCase()
            .includes(sourceFilter.toLowerCase())
        : true;

      const matchesDate = dateFilter
        ? new Date(article.publishedAt).toDateString() ===
          new Date(dateFilter).toDateString()
        : true;

      return matchesAuthor && matchesSource && matchesDate;
    });

    setFilteredArticles(filtered);
  };

  return (
    <CategoryPageContainer>
      <h1 style={{ borderBottom: "1px solid black", alignSelf: "center" }}>
        {categoryName}
      </h1>

      <h2 style={{ marginBottom: "20px" }}>Top {categoryName} News</h2>

      <Top10Container>
        {top10Articles.length > 0 ? (
          <Carousel articles={top10Articles} />
        ) : (
          <p>Loading top articles...</p>
        )}
      </Top10Container>

      {news && news.articles && news.articles.length > 10 && (
        <>
          <SectionTitle>More Articles</SectionTitle>
          <CategoryContentContainer>
            <CategoryContent>
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article, index) => (
                  <NewsCard article={article} key={index + 10} />
                ))
              ) : (
                <p>No articles match the filter criteria.</p>
              )}
            </CategoryContent>

            <FilterContainer>
              <FilterTitle>Filter by:</FilterTitle>

              <FilterSection>
                <FilterLabel htmlFor="author">Author</FilterLabel>
                <FilterInput
                  type="text"
                  id="author"
                  value={authorFilter}
                  onChange={(e) => setAuthorFilter(e.target.value)}
                  placeholder="Enter author name"
                />
              </FilterSection>

              <FilterSection>
                <FilterLabel htmlFor="source">Source</FilterLabel>
                <FilterInput
                  type="text"
                  id="source"
                  value={sourceFilter}
                  onChange={(e) => setSourceFilter(e.target.value)}
                  placeholder="Enter source name"
                />
              </FilterSection>

              <FilterSection>
                <FilterLabel htmlFor="date">Date</FilterLabel>
                <FilterInput
                  type="date"
                  id="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
              </FilterSection>

              <FilterButton onClick={handleFilter}>Apply Filters</FilterButton>
            </FilterContainer>
          </CategoryContentContainer>
        </>
      )}
    </CategoryPageContainer>
  );
};

const CategoryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  padding: 20px 15%;

  @media ${media.mobile} {
    padding: 10px 5%;
  }
`;
const CategoryContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CategoryContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  width: 80%;

  @media ${media.mobile} {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;
const FilterContainer = styled.aside`
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  width: 20%;
  padding: 20px;
  height: fit-content;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 20px;
  position: sticky;
  top: 15%; /* Keeps the filter visible as the user scrolls */

  @media ${media.mobile} {
    display: none;
  }
`;

const FilterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
`;

const FilterSection = styled.div`
  margin-bottom: 15px;
`;

const FilterLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 5px;
`;

const FilterInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.9rem;
  margin-bottom: 10px;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

const FilterButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 0.9rem;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Top10Container = styled.div`
  height: 500px;
  max-width: 100%;
  box-sizing: border-box;
  /* Ensures the carousel stays within bounds */
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${media.mobile} {
    height: 300px;
  }
`;

const SectionTitle = styled.h2`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  @media ${media.mobile} {
    margin-top: 50px;
  }
`;
export default CategoryPage;
