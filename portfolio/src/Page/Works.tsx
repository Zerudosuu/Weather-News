import styled from "styled-components";
import Card1 from "../Components/Card1.tsx";
import { projects } from "../Data/projects.ts";
import { Link } from "react-router-dom";

function Works() {
  return (
    <WorksStyleContainer>
      <div className="TitleAndDescription">
        <h1> FEATURED WORKS</h1>
        <p>
          Each of these projects represents my commitment to combining technical
          expertise with creative problem-solving. From immersive game worlds to
          intuitive software solutions, these works showcase my passion for
          delivering meaningful experiences and pushing the boundaries of what’s
          possible in game development and software engineering. Explore my
          journey through innovation and craftsmanship below.
        </p>
      </div>
      <div className="WorksContainer">
        {projects.map((project) => {
          return (
            <Link key={project.id} to={`/works/${project.id}`} target="_top">
              <Card1
                Title={project.Title}
                Role={project.Role}
                year={project.year}
                image={project.image}
                GameType={project.GameType}
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
  }

  .WorksContainer {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    gap: 2rem;
  }
`;
export default Works;
