import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ImageIntroComponent() {
  return (
    <div className="ImageContainer">
      <img
        className="image1"
        src="/ronald.jpg"
        alt="Photo by Ronald Salvador"
      />
    </div>
  );
}

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

const About = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const opacity2 = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const handleDownloadResume = () => {
    // Handle the download result
    const link = document.createElement("a");
    link.href = "/Ronald'sResume.pdf";
    link.download = "RonaldSalvadorResume.pdf";
    link.click();
  };

  return (
    <AboutContainer ref={targetRef}>
      <MoreAboutContainer
        style={{
          scale: scale1,
          opacity: opacity2,
        }}
        className="MoreAboutContainer"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: "100%" },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
        >
          MORE ABOUT <br /> <span> RONALD </span>{" "}
        </motion.h1>
      </MoreAboutContainer>

      <div className="ImageAndDescriptionContainer">
        <ImageIntroComponent />

        <div className="AboutMe">
          <motion.h1
            style={{ textAlign: "center" }}
            variants={{
              hidden: { opacity: 0, y: "100%" },
              show: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
          >
            I'M A CREATIVE GAME DEVELOPER AND SOFTWARE ENGINEER BASED IN THE
            PHILIPPINES. MY PASSION FOR IMMERSIVE GAMEPLAY, CLEAN CODE
            ARCHITECTURE, AND INTUITIVE USER EXPERIENCES DRIVES MY WORK,
            COMBINING TECHNICAL PRECISION WITH CREATIVE INNOVATION.
          </motion.h1>

          <motion.h3
            variants={{
              hidden: { opacity: 0, y: "120%" },
              show: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
          >
            I'm on cutting edge of game development and software engineering,
            pushing the boundaries of the technology and bring creative visions
            to life. Though my approach may be unconventional, my dedication to
            the craft is unmatched. I thrived on finding "Unexpected solutions"
            and believe that with the right perspective, technology and design
            can be transform experiences and inspire connections.
          </motion.h3>
        </div>

        <Button onClick={handleDownloadResume}>
          Download Resume
          <motion.div className="overLayHover">
            <p> Download Resume</p>
          </motion.div>
        </Button>
      </div>
    </AboutContainer>
  );
};

const AboutContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: 150vh;
    width: 100%;
    padding: 5rem 0;
    align-items: center;
    z-index: 2;


    .ImageAndDescriptionContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 10%;
        overflow-x: hidden;         
       


        .ImageContainer {

            width: 60%;
            height: auto;


            .image1 {
                width: 100%;
                height: 100%;
                object-fit: cover;
                -webkit-mask-image: url("/Ronron-removebg-preview.png");
                -webkit-mask-size: cover;
                -webkit-mask-repeat: no-repeat;
                -webkit-mask-position: center;


            }
            
             @media ${media.tablet} { 
                width: 100%;
                height: 100%;
                .image1 {
                    height: 100%;}
                 
             } 
            
            @media ${media.mobile} {
                
                width: 150%;
                height: 100%;
                .image1 {
                    height: 100%;}
            }
        }

        .AboutMe {
            display: flex;
            flex-direction: column;
            width: 50%;
            text-align: center;
            gap: 20px;

            h1 {
                font-size: 1.4rem;
                font-weight: 600;
                line-height: 1.5;
            }

            h3 {

                font-weight: 400;
                line-height: 1.5;
            }
            
            
            @media ${media.tablet} {
                width: 90%; 
                
                h1 { font-size: 1.2rem}
                h3 { font-size: 1rem}
            }
            
            @media ${media.mobile} {
                width: 90%; 
                
                h1 { font-size: 1rem}
                h3 { font-size: 0.8rem}
            }

        }
`;

const MoreAboutContainer = styled(motion.div)`
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: center;
  line-height: 1;
  position: sticky;
  top: 10%;
  letter-spacing: -3px;

  h1 {
    font-size: 5rem;
  }

  span {
    font-size: 5rem;
  }

  @media ${media.mobile} {
    h1 {
      font-size: 3rem;
    }
    span {
      font-size: 3rem;
    }
  }
`;

const Button = styled(motion.button)`
  background-color: var(--accent-color);
  color: var(--primary-color);
  padding: 1rem 1.5rem;
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
    border: none;
  }

  &:hover .overLayHover {
    opacity: 1;
    transform: translateY(-100%); /* Moves the overlay into view */
  }
`;

export default About;
