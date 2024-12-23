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
        >
          <div className="onlineContainer">
            <div className="Circle"></div>
            <p>AVAILABLE FOR WORK</p>
          </div>
          RONALD <br />
          SALVADOR
        </motion.h1>

        <div className="JobAndLocation">
          <p> BASED IN NAGA CITY, PH</p>
          <p>GAME DEVELOPER & SOFTWARE ENGINEER</p>
        </div>
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
          CONTACT ME
          <div className="overLayHover">
            <p> CONTACT ME</p>
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
        <Panel>
          <About />
        </Panel>
      </PhotoContainer>
      <Works />
      <SliderComponent />
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
    }

    h1 {
      text-align: center;
      font-size: 10rem;
      font-weight: 900;
      color: #242424;
      letter-spacing: -8px;
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
