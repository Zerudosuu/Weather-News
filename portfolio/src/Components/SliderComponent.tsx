import styled from "styled-components";
import { Experience } from "../Data/projects.ts";

type Experiences = {
  Company: string;
  Role: string;
  Year: string;
  Description: string;
};

function RightComponent({ Company, Role, Year, Description }: Experiences) {
  return (
    <RightComponentContainer>
      <h1> {Company}</h1>
      <div className="RoleandYear">
        <h2>{Role}</h2>
        <h2>{Year}</h2>
      </div>
      <p>{Description}</p>
    </RightComponentContainer>
  );
}

function SliderComponent() {
  return (
    <SliderComponentStyle>
      <div className="LeftSection">
        <div className="LeftSectionTitle">
          <h1>EXPERIENCE</h1>
        </div>
      </div>
      <div className="RightSection">
        {Experience.map((experience, index) => {
          return (
            <RightComponent
              key={index}
              Company={experience.Company}
              Role={experience.Role}
              Year={experience.Year}
              Description={experience.Description}
            />
          );
        })}
      </div>
    </SliderComponentStyle>
  );
}

const SliderComponentStyle = styled.div`
  min-height: 100vh;
  height: auto;
  background-color: #242424;
  padding: 4rem;
  display: flex;
  color: white;
  z-index: 1;

  .LeftSection {
    width: 100%;

    position: relative;

    .LeftSectionTitle {
      position: sticky;
      top: 5%;

      h1 {
        font-size: 4rem;
        color: white;
      }
    }
  }

  .RightSection {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 70%;
    gap: 4rem;
  }
`;

const RightComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  width: 100%;
  border-bottom: 1px solid white;
  gap: 20px;

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  .RoleandYear {
    display: flex;
    justify-content: space-between;
    font-weight: 300;
  }

  p {
    max-width: 80%;
    opacity: 0.7;
  }
`;
export default SliderComponent;
