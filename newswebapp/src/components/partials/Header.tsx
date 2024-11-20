import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useScrollDetection from "../../hooks/useScrollDetection.tsx";
import { useState } from "react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  const navigate = useNavigate();
  const isScrolled = useScrollDetection(150);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };
  return (
    <Navbar isScrolled={isScrolled}>
      <TitleAndSearchContainer>
        <h1>News for you!</h1>
        <SearchBar>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for news..."
          />
          <button onClick={handleSearch}>Search</button>
        </SearchBar>
      </TitleAndSearchContainer>

      <nav>
        {categories.map((category, index) => (
          <StyleLink key={index} to={`/${category}`}>
            {category}
          </StyleLink>
        ))}
      </nav>
    </Navbar>
  );
};

const Navbar = styled.header<{ isScrolled: boolean }>`
  height: 100px;
  position: sticky;
  top: 0; /* This makes it stick to the top of the viewport */
  background-color: white; /* Optional: ensure it doesn't show content behind */
  z-index: 1000; /* Optional: ensures it stays above other elements */
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  nav {
    display: flex;
    width: 70%;

    justify-content: space-between;
    align-items: center;
  }
`;

const TitleAndSearchContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const SearchBar = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  background-color: #f5f5f5; /* Light gray background for the search bar */
  border-radius: 5px;
  padding: 5px;
  width: 300px;

  input {
    flex: 1; /* Makes the input take up available space */
    border: none;
    padding: 10px;
    border-radius: 5px 0 0 5px;
    font-size: 14px;
    background-color: white;
    outline: none;

    &:focus {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Add focus shadow for input */
    }
  }

  button {
    border: none;
    padding: 10px 15px;
    background-color: #007bff; /* Blue button color */
    color: white;
    font-size: 14px;
    font-weight: bold;
    border-radius: 0 5px 5px 0;
    cursor: pointer;

    &:hover {
      background-color: #0056b3; /* Darker blue on hover */
    }

    &:active {
      background-color: #003d80; /* Even darker blue on click */
    }
  }
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:active {
    border-bottom: 2px solid black;
  }
`;
export default Header;
