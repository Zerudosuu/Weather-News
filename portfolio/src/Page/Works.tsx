import styled from "styled-components";
import Card1 from "../Components/Card1.tsx";
import { projects } from "../Data/projects.ts";
import { Link } from "react-router-dom";

type WorksProps = {
  isHeaderIncluded?: boolean;
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

function Works({ isHeaderIncluded = false }: WorksProps) {
  return (
    <WorksStyleContainer>
      {isHeaderIncluded && (
        <div className="TitleAndDescription">
          <h1> FEATURED WORKS</h1>
          <p>
            Each of these projects represents my commitment to combining
            technical expertise with creative problem-solving. From immersive
            game worlds to intuitive software solutions, these works showcase my
            passion for delivering meaningful experiences and pushing the
            boundaries of what’s possible in game development and software
            engineering. Explore my journey through innovation and craftsmanship
            below.
          </p>
        </div>
      )}
      <div className="WorksContainer">
        {projects.map((project, index) => {
          return (
            <Link key={index} to={`/works/${project.id}`} target="_top">
              <Card1
                Title={project.Title}
                Role={project.Role}
                year={project.year}
                image={project.image}
                GameType={project.GameType}
                custom={index}
              />
            </Link>
          );
        })}
      </div>
    </WorksStyleContainer>
  );
}

const WorksStyleContainer = styled.div`
  background-color: var(--primary-color);
  height: auto;
  padding: 2rem;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  z-index: 1;

  .TitleAndDescription {
    padding: 0 2rem;

    h1 {
      font-size: 8rem;
      font-weight: 400;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      opacity: 0.6;
      max-width: 70%;
    }
  }

  .WorksContainer {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    gap: 2rem;
  }

  @media ${media.tablet} {
    .TitleAndDescription {
      padding: 0 1rem;

      h1 {
        font-size: 5rem;
      }

      p {
        font-size: 0.8rem;
      }
    }

    .WorksContainer {
      gap: 1rem;
    }
  }

  @media ${media.mobile} {
    .TitleAndDescription {
      padding: 0 0.5rem;

      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 0.8rem;
      }
    }

    .WorksContainer {
      gap: 1rem;
    }
  }
`;
export default Works;
