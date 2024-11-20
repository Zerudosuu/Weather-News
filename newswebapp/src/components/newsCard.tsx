import styled from "styled-components";
import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  };
  return (
    <div>
      <CardContainer>
        {article.urlToImage && (
          <Image src={article.urlToImage} alt="Article image" />
        )}
        <Title>{truncateTitle(article.title, 50)}</Title>
        <Description>
          {truncateTitle(article.description || "", 100)}
        </Description>
        <Author>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
          By {article.author}
        </Author>
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 15px;
  padding: 20px;
  background-color: #f9f9f9;
  transition: transform 0.2s;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 15px;
`;

const Author = styled.h4`
  font-size: 0.9rem;
  color: #777;
  font-style: italic;
  text-align: right;
  display: flex;
  justify-content: space-between;
`;

export default NewsCard;
