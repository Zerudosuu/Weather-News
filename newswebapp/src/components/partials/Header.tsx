import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useScrollDetection from "../../hooks/useScrollDetection.tsx";
import { useState } from "react";
import { Menu, SearchIcon } from "lucide-react";

// BreakPoints
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

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
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
        <Sidebar isSideBarOpen={isSideBarOpen}>
          <CloseButton onClick={() => setIsSideBarOpen(false)}>×</CloseButton>
          <SidebarSearchBar>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for news..."
            />
            <button className="SearchButton" onClick={handleSearch}>
              <SearchIcon />
            </button>
          </SidebarSearchBar>
          <h2>Popular Categories</h2>
          {categories.map((category, index) => (
            <SidebarLink
              key={index}
              to={`/${category}`}
              onClick={() => setIsSideBarOpen(false)}
            >
              {category}
            </SidebarLink>
          ))}
        </Sidebar>
        <HeaderContent>
          <button className="menuButton" onClick={() => setIsSideBarOpen(true)}>
            <Menu />
          </button>
          <StyleLinkTitle to={`/`}>News for you!</StyleLinkTitle>
          <SearchBar>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for news..."
            />
            <button className="SearchButton" onClick={handleSearch}>
              <SearchIcon />
            </button>
          </SearchBar>
        </HeaderContent>
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
  top: 0;
  background-color: white;
  z-index: 1000;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  nav {
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;

    @media ${media.tablet} {
      display: flex;
      width: 80%;
      justify-content: space-between;
      align-items: center;
    }

    @media ${media.mobile} {
      display: none;
    }
  }
`;

const TitleAndSearchContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const StyleLinkTitle = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 30px;
  font-weight: bold;
`;
const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .menuButton {
    display: none;
  }

  @media ${media.mobile} {
    justify-content: center;

    .menuButton {
      background-color: transparent;
      border: none;
      font-size: 18px;
      cursor: pointer;
      margin-right: 10px;
      position: absolute;
      left: 50px;
      display: flex;
    }
  }
`;

const Sidebar = styled.aside<{ isSideBarOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isSideBarOpen }) => (isSideBarOpen ? "0" : "-300px")};
  width: 300px;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
  box-shadow: 3px 0 5px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease;
  z-index: 1001;
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 0;
    font-size: 20px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 10px 0;
  display: block;
  font-size: 18px;

  &:hover {
    background-color: #333;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding-left: 4px;
  width: 300px;
  position: absolute;
  right: 10px;

  @media ${media.mobile} {
    display: none;
  }

  input {
    flex: 1;
    border: none;
    padding: 12px;
    border-radius: 5px 0 0 5px;
    font-size: 14px;
    background-color: white;
    outline: none;
  }

  button {
    border: none;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    font-size: 14px;
    font-weight: bold;
    border-radius: 0 5px 5px 0;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const SidebarSearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding-left: 4px;
  width: 200px;
  margin-bottom: 20px;

  input {
    flex: 1;
    border: none;
    padding: 8px;
    border-radius: 5px 0 0 5px;
    font-size: 14px;
    background-color: white;
    outline: none;
  }

  button {
    border: none;
    padding: 6px 8px;
    background-color: #007bff;
    color: white;
    font-size: 14px;
    font-weight: bold;
    border-radius: 0 5px 5px 0;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
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
