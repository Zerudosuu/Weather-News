// Sidebar.tsx
import { Link } from "react-router-dom";
import styled from "styled-components";

// Sidebar component
const Sidebar = () => {
  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <SidebarContainer>
      {categories.map((category, index) => (
        <StyleLink key={index} to={`/${category}`}>
          {category}
        </StyleLink>
      ))}
    </SidebarContainer>
  );
};

// Styled component for Sidebar
const SidebarContainer = styled.aside`
  width: 250px;
  background-color: #f5f5f5;
  padding: 10px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  display: none; /* Hide by default on larger screens */

  @media (max-width: 1024px) {
    /* Show on mobile and tablet screens */
    display: block;
  }
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 5px;
  display: block;

  &:hover {
    background-color: #ddd;
  }
`;

export default Sidebar;
