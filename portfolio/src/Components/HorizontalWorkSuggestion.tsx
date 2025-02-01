import { projects } from "../Data/projects.ts";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

function MoreWorksCard({ image }: { image: string }) {
  return (
    <MoreWorksCardStyle
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
    >
      <img src={image} alt="photo" />
    </MoreWorksCardStyle>
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

function HorizontalWorkSuggestion({ GameId }: { GameId: string }) {
  const filteredProjects = projects.filter((project) => project.id !== GameId);

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], [0, -1300]);
  // const color = useTransform(scrollYProgress, [0, 1], ["#fff", "#242424"]);

  return (
    <HorizontalWorkSuggestionStyle ref={targetRef}>
      <motion.div className="CardContainer">
        <motion.div
          className="imageContainer"
          style={{
            x: x,
          }}
        >
          {filteredProjects.map((project, index) => (
            <Link key={index} to={`/works/${project.id}`} target="_top">
              <MoreWorksCard image={project.image} key={index} />
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </HorizontalWorkSuggestionStyle>
  );
}
const HorizontalWorkSuggestionStyle = styled(motion.div)`
  background-color: white;
  height: 250vh;
  padding: 0 2rem;

  .CardContainer {
    height: 50vh;
    position: sticky;
    top: 20%;
    display: flex;

    justify-content: flex-start;
    align-items: center;
    overflow: hidden;

    .imageContainer {
      display: grid;
      grid-template-columns: repeat(6, 2fr);
      grid-template-rows: 5fr;
      grid-gap: 3vw;
      padding: 0 2rem;
    }
  }
`;

const MoreWorksCardStyle = styled(motion.div)`
  height: 400px;
  width: 500px;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid black;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${media.tablet} {
    height: 280px;
    width: 300px;
  }

  @media ${media.mobile} {
    height: 300px;
    width: 320px;
  }
`;

export default HorizontalWorkSuggestion;
