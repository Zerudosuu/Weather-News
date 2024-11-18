import { useParams } from "react-router-dom";
import { fetchCategories } from "../api/newsAPi.ts";
import { useEffect, useState } from "react";
import NewsCard from "../components/newsCard.tsx";
import styled from "styled-components";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const getCategoryNews = async () => {
      try {
        const result = await fetchCategories(categoryName, "US", 40);
        setNews(result);
      } catch (e) {
        console.error(e);
      }
    };

    getCategoryNews();
  }, [categoryName]);

  return (
    <div>
      <h1> This is {categoryName}</h1>
      <CategoryPageContainer>
        {news && news.articles ? (
          news.articles
            .filter((article) => !article.title.startsWith("[Removed]")) // Filter out articles that start with [Removed]
            .map((article, index) => <NewsCard article={article} key={index} />)
        ) : (
          <p>No articles found.</p>
        )}
      </CategoryPageContainer>
    </div>
  );
};

const CategoryPageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

export default CategoryPage;
