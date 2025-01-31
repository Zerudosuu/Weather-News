import { projects } from "../Data/projects.ts";
import styled from "styled-components";

function MoreWorksCard({ image }: { image: string }) {
  return (
    <MoreWorksCardStyle>
      <img src={image} alt="photo" />
    </MoreWorksCardStyle>
  );
}

function HorizontalWorkSuggestion({ GameId }: { GameId: string }) {
  const filteredProjects = projects.filter((project) => project.id !== GameId);

  return (
    <HorizontalWorkSuggestionStyle>
      {filteredProjects.map((project, index) => (
        <MoreWorksCard image={project.image} key={index} />
      ))}
    </HorizontalWorkSuggestionStyle>
  );
}
const HorizontalWorkSuggestionStyle = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  background-color: white;
  padding: 1rem;
`;
const MoreWorksCardStyle = styled.div`
  height: 300px;
  width: 500px;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid black;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default HorizontalWorkSuggestion;
