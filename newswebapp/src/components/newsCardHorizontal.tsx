import styled from "styled-components";

const NewsCardHorizontal = ({ article }) => {
  return (
    <Card>
      <ImageWrapper>
        <img src={article.urlToImage} alt={article.title} />
      </ImageWrapper>
      <Content>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </Content>
    </Card>
  );
};

export default NewsCardHorizontal;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  overflow: hidden;
  background-color: #fff;
  max-height: 200px;
`;

const ImageWrapper = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 15px;
  }

  a {
    align-self: flex-start;
    color: #007bff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
