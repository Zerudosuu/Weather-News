import { Link } from "react-router-dom";
import styled from "styled-components";
import useScrollDetection from "../../hooks/useScrollDetection.tsx";

const Header = () => {
  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  const isScrolled = useScrollDetection(150);

  return (
    <Navbar isScrolled={isScrolled}>
      <StyleLink to="/">
        <h1>News for you!</h1>
      </StyleLink>
      <nav>
        {categories.map((category, index) => (
          <StyleLink key={index} to={`/${category.toLowerCase()}`}>
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

const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:active {
    border-bottom: 2px solid black;
  }
`;
export default Header;
