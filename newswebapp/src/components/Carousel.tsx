import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

//BreakPoints
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

type Articles = {
  articles: {
    urlToImage: string;
    title: string;
    description: string;
  }[];
};

const Carousel = ({ articles }: Articles) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <SliderContainer {...settings}>
      {articles.map((article, index) => (
        <div key={index}>
          <CarouselSlide
            key={index}
            style={{
              backgroundImage: `url(${article.urlToImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <SlideText>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </SlideText>
          </CarouselSlide>
        </div>
      ))}
    </SliderContainer>
  );
};

const SliderContainer = styled(Slider)`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 20px;
`;

const CarouselSlide = styled.div`
  position: relative;
  display: flex;
  border-radius: 20px;
  height: 500px;

  @media ${media.mobile} {
    height: 300px;
  }
`;

const SlideText = styled.div`
  align-self: flex-end;
  z-index: 2; /* Place text above the overlay */

  padding: 20px;

  h3 {
    color: white;
    font-size: 48px;
    margin: 0 0 10px;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7); /* Add shadow for readability */
  }

  p {
    color: white;
    font-size: 1rem;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  }

  @media ${media.mobile} {
    h3 {
      font-size: 24px;
    }

    p {
      display: none;
    }
  }
`;

export default Carousel;
