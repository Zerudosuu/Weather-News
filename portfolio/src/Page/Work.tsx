import { useParams } from "react-router-dom";
import { projects } from "../Data/projects";
// import PhotoStagnantContainer from "../Components/PhotoStagnantContainer.tsx";
import styled from "styled-components";
import HorizontalWorkSuggestion from "../Components/HorizontalWorkSuggestion.tsx";
import { useState } from "react";
import { motion } from "framer-motion";
type DetailComponentProps = {
  Title: string;
  Description: string;
};
//
// type DetailComponentProps2 = {
//   Title: string;
//   Description: string;
//   noBorderBottom?: boolean;
// };

function DetailComponent({ Title, Description }: DetailComponentProps) {
  return (
    <DetailComponentStyle>
      <h1>{Title}</h1>
      <h1>{Description}</h1>
    </DetailComponentStyle>
  );
}

// function DetailComponent2({
//   Title,
//   Description,
//   noBorderBottom,
// }: DetailComponentProps2) {
//   return (
//     <DetailComponentStyle2 noborderbottom={noBorderBottom}>
//       <h1>{Title}</h1>
//       <h1>{Description}</h1>
//     </DetailComponentStyle2>
//   );
// }

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

function Work() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  // State to track the currently selected image
  const [selectedImage, setSelectedImage] = useState(project?.image || "");

  if (!project) {
    return <div style={{ color: "Black" }}>Work not found</div>;
  }

  return (
    <WorkStyleContainer>
      <MainBanner>
        <MainShowCase>
          <img src={selectedImage} alt="photo" />
          <ImagesContainer>
            {project.SpecifiedDetails[0].ListOfImages.map((img, index) => (
              <motion.div
                onClick={() => setSelectedImage(img)} // Click to change the main image
                className="SelectOption"
                key={index}
                style={{ cursor: "pointer" }}
                whileHover={{
                  y: -20,
                }} // Make it clear it's clickable
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </motion.div>
            ))}
          </ImagesContainer>
        </MainShowCase>
        <div className="GamePoster">
          <img src={project.image} alt="photo" />
        </div>
      </MainBanner>

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
    height: 50vh;
    width: 100%;
    background-color: white;
    padding: 2rem 4rem;

    @media ${media.tablet} {
      padding: 1rem;
      flex-direction: column;
      height: auto;
    }

    @media ${media.mobile} {
      padding: 2rem;
      height: auto;
      flex-direction: column;
    }

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

      @media ${media.tablet} {
        width: 100%;
        h1 {
          font-size: 3rem;
        }
        p {
          font-size: 1rem;
        }
      }

      @media ${media.mobile} {
        width: 100%;
        h1 {
          font-size: 2rem;
        }
        p {
          font-size: 1rem;
        }
      }
    }

    .Details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 30%;
      margin-bottom: 2rem;

      @media ${media.tablet} {
        width: 100%;
      }

      @media ${media.mobile} {
        width: 100%;
      }
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
    padding: 0 2rem;

    @media ${media.tablet} {
      padding: 1rem;
    }

    @media ${media.mobile} {
      h1 {
        font-size: 1rem;
      }
    }
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

  @media ${media.tablet} {
    width: 100%;
    h1 {
      font-size: 1rem;
    }
  }

  @media ${media.mobile} {
    width: 100%;
    h1 {
      font-size: 1rem;
    }
  }
`;

// const DetailComponentStyle2 = styled.div<{ noborderbottom?: boolean }>`
//   display: flex;
//   justify-content: space-between;
//   align-items: end;
//   height: 15rem;
//   border-bottom: ${(props) =>
//     props.noborderbottom ? "none" : "1px solid rgba(128, 128, 128, 0.3)"};
//
//   h1 {
//     align-self: start;
//     font-size: 1.8rem;
//     line-height: 1.4;
//     opacity: 0.5;
//   }
//
//   :nth-child(2) {
//     height: 100%;
//     width: 40%;
//     font-size: 1.1rem;
//     opacity: 0.8;
//     line-height: 1.5;
//     padding-bottom: 2rem;
//   }
// `;

const MainBanner = styled.div`
  height: 70vh;
  display: flex;

  padding: 2rem 4rem;
  background-color: white;
  gap: 1rem;

  .GamePoster {
    height: 100%;
    width: 30%;
    border: 1px solid black;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media ${media.tablet} {
    flex-direction: column-reverse;
    padding: 1rem;
    height: 100vh;

    .GamePoster {
      width: 100%;
      height: 60%;
    }
  }

  @media ${media.mobile} {
    height: 70vh;
    flex-direction: column-reverse;

    .GamePoster {
      width: 100%;
      height: 50%;
    }
  }
`;

const MainShowCase = styled.div`
  height: 100%;
  width: 70%;
  border: 1px solid #5e1212;
  background-color: white;
  position: relative;
  display: flex;
  align-items: end;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${media.tablet} {
    width: 100%;
    height: 100%;
  }

  @media ${media.mobile} {
    width: 100%;
    height: 100%;

    img {
      object-fit: contain;
    }
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  height: 15%;
  width: 70%;
  gap: 1rem;

  position: absolute;
  margin: 2rem;

  .SelectOption {
    height: 100%;
    width: 15%;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }

  @media ${media.tablet} {
    gap: 1rem;
    width: 100%;
  }

  @media ${media.mobile} {
    display: none;
  }
`;

export default Work;
