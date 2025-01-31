import styled from "styled-components";
import PhotoContainer from "../Components/PhotoContainer.tsx";
import Works from "./Works.tsx";
import Panel from "../Components/Panel.tsx";
import About from "./About.tsx";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import SliderComponent from "../Components/SliderComponent.tsx";
import PhotoStagnantContainer from "../Components/PhotoStagnantContainer.tsx";
import FrequentlyAskedQuestion from "../Components/FrequentlyAskedQuestion.tsx";
import { Experience, TechStack } from "../Data/projects.ts";
import { Link } from "react-router-dom";

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

function LandingPage() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 20]);

  const backGroundChange = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    ["#fff", "#242424", "#242424"],
  );

  return (
    <LandingPageStyle
      ref={container}
      style={{
        backgroundColor: backGroundChange,
      }}
    >
      <div className="HomePage">
        <motion.h1
          style={{
            scale: scale1,
          }}
          variants={{
            hidden: { opacity: 0, y: "100%" },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
        >
          <div className="onlineContainer">
            <div className="Circle"></div>
            <p>AVAILABLE FOR WORK</p>
          </div>
          RONALD <br />
          SALVADOR
        </motion.h1>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: "200%" },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.9 }}
          className="JobAndLocation"
        >
          <p> BASED IN NAGA CITY, PH</p>
          <p>GAME DEVELOPER & SOFTWARE ENGINEER</p>
        </motion.div>
      </div>
    </LandingPageStyle>
  );
}

function LastPage() {
  return (
    <LastPageStyle>
      <div className="WorkWithMeContainer">
        <h1>
          LET 'S WORK <br /> TOGETHER
        </h1>
        <Button>
          <Link to={"/Contact"}>CONTACT ME</Link>
          <div className="overLayHover">
            <Link to={"/Contact"}>CONTACT ME</Link>
          </div>
        </Button>
      </div>
      <div className="ImageContainer">
        <img src="/hotdog.jpg" alt="RonaldPhoto" />
      </div>
      <div className="Description">
        <h1>
          I'M A CREATIVE GAME DEVELOPER AND SOFTWARE ENGINEER BASED IN THE
          PHILIPPINES. MY PASSION FOR IMMERSIVE GAMEPLAY, CLEAN CODE
          ARCHITECTURE, AND INTUITIVE USER EXPERIENCES DRIVES MY WORK, COMBINING
          TECHNICAL PRECISION WITH CREATIVE INNOVATION.
        </h1>
      </div>
    </LastPageStyle>
  );
}

function Home() {
  return (
    <>
      <LandingPage />
      <PhotoContainer>
        <Panel>{<About />}</Panel>
      </PhotoContainer>

      <Works isHeaderIncluded={true} />
      <SliderComponent Title={"EXPERIENCE"} Experience={Experience} />
      <SliderComponent
        Title={"FAVOURITE TOOLS"}
        secondCard={true}
        TechStack={TechStack}
      />
      <PhotoStagnantContainer Image={"/Hireme2.png"} />
      <FrequentlyAskedQuestion />
      <LastPage />
    </>
  );
}

export default Home;

const LandingPageStyle = styled(motion.div)`
  height: 200vh;
  width: 100%;
  background-color: white;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;

  .HomePage {
    display: flex;
    width: 100%;
    height: 80vh;
    position: sticky;
    top: -10%;
    justify-content: center;
    align-items: center;
    line-height: 0.8;

    svg {
      width: 300px;
      height: 300px;
      fill: #242424;
      margin: 0 auto;

      position: absolute;
      top: 185px;
      left: 24%;
    }

    .onlineContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      margin-bottom: 1rem;

      p {
        font-weight: 400;
        letter-spacing: 1px;
      }

      .Circle {
        height: 15px;
        width: 15px;
        background-color: green;
        border-radius: 50%;
      }

      @media ${media.mobile} {
        p {
          font-size: 0.8rem;
        }
      }
    }

    h1 {
      text-align: center;
      font-size: 10rem;
      font-weight: 900;
      color: #242424;
      letter-spacing: -8px;

      @media ${media.tablet} {
        font-size: 7rem;
      }

      @media ${media.mobile} {
        font-size: 5rem;
      }
    }

    .JobAndLocation {
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 10px;
      padding: 0 5rem;

      p {
        font-size: 1rem;
        font-weight: 600;
      }

      @media ${media.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }

      @media ${media.mobile} {
        p {
          font-size: 0.7rem;
        }
      }
    }
  }
`;
const LastPageStyle = styled.div`
  background-color: white;
  min-height: 120vh;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;

  padding: 5rem;
  align-items: center;
  color: black;

  @media ${media.tablet} {
    padding: 1rem;
  }

  @media ${media.mobile} {
    padding: 2rem;
    min-height: 100vh;
  }

  .WorkWithMeContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 30%;
    width: 100%;
    gap: 5px;

    h1 {
      font-size: 5rem;
      font-weight: 700;
      letter-spacing: -5px;
      text-align: center;
    }

    @media ${media.tablet} {
      h1 {
        font-size: 3rem;
      }
    }

    @media ${media.mobile} {
      h1 {
        font-size: 4rem;
      }
    }
  }

  .ImageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
    width: 30%;
    overflow: hidden;

    img {
      height: 40%;
      width: 100%;
      object-fit: cover;
      -webkit-mask-image: url("/Ronron-removebg-preview.png");
      -webkit-mask-size: cover;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
    }

    @media ${media.tablet} {
      height: 20%;
      width: 100%;
      overflow-x: hidden;

      img {
        height: 100%;
      }
    }

    @media ${media.mobile} {
      height: 20%;
      width: 100%;
      overflow-x: hidden;

      img {
        height: 100%;
      }
    }
  }

  .Description {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 60%;
    padding: 0 5rem;
    color: black;

    h1 {
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 1.2;
      text-align: center;
      letter-spacing: -1px;
    }

    @media ${media.tablet} {
      padding: 0;
      h1 {
        font-size: 1.2rem;
      }
    }

    @media ${media.mobile} {
      height: 50%;
      width: 100%;
      padding: 0;
      h1 {
        font-size: 1rem;
      }
    }
  }
`;

const Button = styled(motion.button)`
  background-color: var(--accent-color);
  color: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;

  &:hover {
    color: var(--accent-color); /* Text color change for hover effect */
  }

  .overLayHover {
    position: absolute;
    top: 100%; /* Start from below the button */
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    color: var(--accent-color);
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 600;
    opacity: 0;
    transform: translateY(0);
    transition:
      transform 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
  }

  &:hover .overLayHover {
    opacity: 1;
    transform: translateY(-100%); /* Moves the overlay into view */
  }
`;
