import { useParams } from "react-router-dom";
import { fetchCategories } from "../api/newsAPi.ts";
import { useEffect, useState } from "react";
import NewsCard from "../components/newsCard.tsx";
import styled from "styled-components";
import Carousel from "../components/Carousel.tsx";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [news, setNews] = useState(null);
  const [top10Articles, setTop10Articles] = useState([]);

  useEffect(() => {
    const getCategoryNews = async () => {
      try {
        const result = await fetchCategories(categoryName, "US", 40);
        setNews(result);

        // Get the top 10 images
        const top10Articles = result.articles
          .filter((article) => !article.title.startsWith("[Removed]"))
          .slice(0, 10);
        setTop10Articles(top10Articles);
      } catch (e) {
        console.error(e);
      }
    };

    getCategoryNews();
  }, [categoryName]);

  return (
    <CategoryPageContainer>
      <h1 style={{ borderBottom: "1px solid black", alignSelf: "center" }}>
        {" "}
        {categoryName}
      </h1>

      <h2 style={{ marginBottom: "20px" }}>Top {categoryName} news</h2>

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
            {/* Display the remaining articles (11 and beyond) */}
            <CategoryContent>
              {news.articles
                .filter((article) => !article.title.startsWith("[Removed]"))
                .slice(10)
                .map((article, index) => (
                  <NewsCard article={article} key={index + 10} />
                ))}
            </CategoryContent>

            <FilterContainer>
              <FilterTitle>Filter by:</FilterTitle>

              <FilterSection>
                <FilterLabel htmlFor="author">Author</FilterLabel>
                <FilterInput
                  type="text"
                  id="author"
                  placeholder="Enter author name"
                />
              </FilterSection>

              <FilterSection>
                <FilterLabel htmlFor="source">Source</FilterLabel>
                <FilterInput
                  type="text"
                  id="source"
                  placeholder="Enter source name"
                />
              </FilterSection>

              <FilterSection>
                <FilterLabel htmlFor="date">Date</FilterLabel>
                <FilterInput type="date" id="date" />
              </FilterSection>

              <FilterButton>Apply Filters</FilterButton>
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
  border: 1px solid black;
  width: 100%;
  padding: 20px 15%;
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
`;

const SectionTitle = styled.h2`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.5rem;
`;
export default CategoryPage;
