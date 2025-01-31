import styled from "styled-components";
import { motion } from "motion/react";

type Project = {
  Title: string;
  Role: string;
  year: string;
  image: string;
  GameType: string;
  custom?: number;
};

const fadeAnimationVariants = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const sizes = {
  desktop: "1024px", // Standard breakpoint for larger screens
  tablet: "768px", // Common tablet breakpoint (e.g., iPads)
  mobile: "480px", // Suitable for small phones
};

const media = {
  desktop: `(max-width: ${sizes.desktop})`,
  tablet: `(max-width: ${sizes.tablet})`,
  mobile: `(max-width: ${sizes.mobile})`,
};

function Card1({ Title, Role, year, image, GameType, custom }: Project) {
  return (
    <CardContainerStyle
      variants={fadeAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      custom={custom}
    >
      <div className="ImageContainer">
        <img src={image} alt="Project" />
        <div className="GameType">
          <h2>{GameType}</h2>
        </div>
      </div>
      <div className="DetailContainer">
        <div className="DetailContainerStyle">
          <h1>{Title}</h1>
          <p>{Role}</p>
        </div>
        <h3>{year}</h3>
      </div>
    </CardContainerStyle>
  );
}

const CardContainerStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 850px;
  height: 500px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  margin: 10px;
  overflow: hidden;

  .ImageContainer {
    height: 80%;
    width: 100%;

    overflow: hidden;
    position: relative;

    .GameType {
      position: absolute;
      top: 20px;
      left: 20px;
      background-color: var(--accent-color);
      border-radius: 5px;
      padding: 0.5rem 1rem;
      color: #242424;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

      @media ${media.mobile} {
        h2 {
          font-size: 1rem;
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      opacity: 0.8;
      object-fit: cover;
    }
  }

  .DetailContainer {
    width: 100%;
    height: 20%;
    display: flex;
    background-color: white;
    color: black;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.8);

    .DetailContainerStyle {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    h1 {
      font-size: 1rem;
      font-weight: 600;
    }

    p {
      font-size: 0.8rem;
      font-weight: 400;
      opacity: 0.6;
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
    }
  }

  @media ${media.tablet} {
    width: 100%;
    height: 400px;
  }

  @media ${media.mobile} {
    width: 100%;
    height: 300px;
  }
`;
export default Card1;
