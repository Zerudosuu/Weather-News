import { useParams } from "react-router-dom";
import { projects } from "../Data/projects";
import PhotoStagnantContainer from "../Components/PhotoStagnantContainer.tsx";
import styled from "styled-components";
import HorizontalWorkSuggestion from "../Components/HorizontalWorkSuggestion.tsx";
type DetailComponentProps = {
  Title: string;
  Description: string;
};

type DetailComponentProps2 = {
  Title: string;
  Description: string;
  noBorderBottom?: boolean;
};

function DetailComponent({ Title, Description }: DetailComponentProps) {
  return (
    <DetailComponentStyle>
      <h1>{Title}</h1>
      <h1>{Description}</h1>
    </DetailComponentStyle>
  );
}

function DetailComponent2({
  Title,
  Description,
  noBorderBottom,
}: DetailComponentProps2) {
  return (
    <DetailComponentStyle2 noborderbottom={noBorderBottom}>
      <h1>{Title}</h1>
      <h1>{Description}</h1>
    </DetailComponentStyle2>
  );
}

function Work() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div style={{ color: "Black" }}>Work not found</div>;
  }

  return (
    <WorkStyleContainer>
      <div className="ProjectTitleAndDetails">
        <div className="TitleAndDescription">
          <h1>{project.Title}</h1>
          <p>{project.Description}</p>
        </div>
        <div className="Details">
          {project.SpecifiedDetails[0].Details.map((detail, index) => (
            <DetailComponent
              key={index}
              Title={detail.Title}
              Description={detail.Description}
            />
          ))}
        </div>
      </div>
      <PhotoStagnantContainer
        Image={project.SpecifiedDetails?.[0]?.ListOfImages?.Image1}
        PropsHeight={"90vh"}
      />
      <ProductionContainer>
        {project.SpecifiedDetails?.[0]?.ListOfDescriptions.map(
          (detail: { Title: string; Description: string }, index: number) => (
            <DetailComponent2
              key={index}
              Title={detail.Title}
              Description={detail.Description}
              noBorderBottom={
                index ===
                project.SpecifiedDetails[0].ListOfDescriptions.length - 1
              }
            />
          ),
        )}
      </ProductionContainer>
      <PhotoStagnantContainer
        Image={project.SpecifiedDetails?.[0]?.ListOfImages?.Image2}
        PropsHeight={"80vh"}
      />
      <div style={{ padding: "4rem", backgroundColor: "white" }}>
        <DetailComponent2
          Title={"CONCEPT"}
          Description={project.Concept}
          noBorderBottom={true}
        />
      </div>
      <PhotoStagnantContainer
        Image={project.SpecifiedDetails?.[0]?.ListOfImages?.Image3}
      />

      <div className="moreWorks">
        {Array.from({ length: 6 }).map((_, index) => (
          <h1 key={index}>MORE WORKS</h1>
        ))}
      </div>

      <HorizontalWorkSuggestion GameId={id || ""} />
    </WorkStyleContainer>
  );
}

const WorkStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  z-index: 1;

  .ProjectTitleAndDetails {
    display: flex;
    justify-content: space-between;
    height: 60vh;
    width: 100%;
    background-color: white;
    padding: 4rem;

    .TitleAndDescription {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 40%;
      justify-content: center;
      gap: 10px;

      h1 {
        font-size: 4rem;
        font-weight: 600;
        line-height: 1.5;
      }

      p {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.5;
        opacity: 0.6;
      }
    }

    .Details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 30%;
    }
  }

  .moreWorks {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 10vh;
    width: 100%;
    background-color: white;
    color: black;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const DetailComponentStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  border-bottom: 1px solid gray;
  padding: 1.2rem 0;

  h1 {
    font-size: 1.2rem;
  }

  :nth-child(2) {
    opacity: 0.5;
  }
`;

const DetailComponentStyle2 = styled.div<{ noborderbottom?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: end;
  height: 15rem;
  border-bottom: ${(props) =>
    props.noborderbottom ? "none" : "1px solid rgba(128, 128, 128, 0.3)"};

  h1 {
    align-self: start;
    font-size: 1.8rem;
    line-height: 1.4;
    opacity: 0.5;
  }

  :nth-child(2) {
    height: 100%;
    width: 40%;
    font-size: 1.1rem;
    opacity: 0.8;
    line-height: 1.5;
    padding-bottom: 2rem;
  }
`;

const ProductionContainer = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  background-color: white;
  padding: 0 2rem;
`;

export default Work;
