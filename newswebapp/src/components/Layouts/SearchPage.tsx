import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchNews } from "../../api/newsAPi.ts"; // Replace with your API function
import styled from "styled-components";

import NewsCard from "../newsCard.tsx";

const SearchPage = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        setLoading(true);
        try {
          const results = await searchNews(query, 20);

          // Filter out unwanted articles
          const filteredResult = results.articles.filter(
            (article: { title: string }) =>
              !article.title.startsWith("[Removed]")
          );

          // Update state with filtered articles
          setSearchResults(filteredResult);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSearchResults();
  }, [query]);
  return (
    <SearchPageContainer>
      <Header>
        <h1>Search Results for "{query}"</h1>
      </Header>
      {loading ? (
        <p>Loading...</p>
      ) : searchResults.length > 0 ? (
        <ResultsContainer>
          {searchResults.map((article, index) => (
            <NewsCard article={article} key={index} />
          ))}
        </ResultsContainer>
      ) : (
        <p>No results found.</p>
      )}
    </SearchPageContainer>
  );
};

export default SearchPage;

// Styled Components
const SearchPageContainer = styled.div`
  padding: 20px 15%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  text-align: center;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  margin-bottom: 20px;

  h1 {
    font-size: 1.8rem;
    color: #333;
  }
`;

const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center; /* Centers the items horizontally */
`;
