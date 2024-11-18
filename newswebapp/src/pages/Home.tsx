import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <div className="TrendingNewsContainer">this is Trending news</div>
      <div className="OtherNews">this is Trending news</div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  border: 1px solid black;

  .TrendingNewsContainer {
    border: 1px solid black;
    height: 50vh;
  }

  .OtherNews {
  }
`;

export default Home;
