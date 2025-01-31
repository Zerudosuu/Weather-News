import styled from "styled-components";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

type Experiences = {
  Company: string;
  Role: string;
  Year: string;
  Description: string;
};

type TechStack = {
  Title: string;
  imageLink: string;
  Description: string;
};

type RightComponentrop = {
  Experience?: Experiences[];
  TechStack?: TechStack[];
  secondCard?: boolean;
  variants?: Variants;
  initial?: string;
  whileInView?: string;
  viewport?: { once?: boolean };
  custom?: number;
};

const fadeAnimationVariants = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
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

function RightComponent({
  Experience,
  TechStack,
  secondCard = false,
  custom,
}: RightComponentrop) {
  const experience = Experience?.[0]; // Single experience object
  const techStack = TechStack?.[0]; // Single tech stack object

  return (
    <RightComponentContainer
      secondCard={secondCard}
      variants={fadeAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      custom={custom}
    >
      {!secondCard ? (
        <>
          <h1>{experience?.Company}</h1>
          <div className="RoleandYear">
            <h2>{experience?.Role}</h2>
            <h2>{experience?.Year}</h2>
          </div>
          <p>{experience?.Description}</p>
        </>
      ) : (
        <SecondCard>
          <div className="DetailsContainer">
            <h1>{techStack?.Title}</h1>
            <p>{techStack?.Description}</p>
          </div>
          <div className="IconContaienr">
            <div className="Icon">
              <img
                src={techStack?.imageLink}
                alt={techStack?.Title || "icon"}
              />
            </div>
          </div>
        </SecondCard>
      )}
    </RightComponentContainer>
  );
}

type SliderComponentProps = {
  reverse?: boolean;
  TechStack?: TechStack[];
  Experience?: Experiences[];
  secondCard?: boolean;
  Title: string;
};

function SliderComponent({
  reverse = false,
  secondCard = false,
  Title,
  TechStack = [],
  Experience = [],
}: SliderComponentProps) {
  return (
    <SliderComponentStyle reverse={reverse}>
      <div className="LeftSection">
        <div className="LeftSectionTitle">
          <h1>{Title}</h1>
        </div>
      </div>
      <div className="RightSection">
        {/* Render TechStack cards */}
        {TechStack.length > 0 &&
          TechStack.map((stack, index) => (
            <RightComponent
              key={index}
              TechStack={[stack]}
              secondCard={secondCard}
              custom={index}
            />
          ))}

        {/* Render Experience cards */}
        {Experience.length > 0 &&
          Experience.map((exp, index) => (
            <RightComponent key={index} Experience={[exp]} custom={index} />
          ))}
      </div>
    </SliderComponentStyle>
  );
}

const SliderComponentStyle = styled.div<{ reverse: boolean }>`
  min-height: 100vh;
  height: auto;
  background-color: #242424;
  padding: 4rem;
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  color: white;
  z-index: 1;

  .LeftSection {
    width: 100%;
    position: relative;

    .LeftSectionTitle {
      position: sticky;
      top: 5%;
      display: flex;
      justify-content: ${(props) =>
        props.reverse ? "flex-end" : "flex-start"};
      text-align: ${(props) => (props.reverse ? "right" : "left")};

      h1 {
        font-size: 4rem;
        color: white;
      }

      @media ${media.mobile} {
        position: relative;
        h1 {
          font-size: 2rem;
        }
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

  @media ${media.mobile} {
    padding: 2rem;
    flex-direction: column;

    .RightSection {
      width: 100%;
    }
  }
`;

const RightComponentContainer = styled(motion.div)<{ secondCard: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  width: 100%;
  border-bottom: 1px solid white;
  gap: 20px;
  background-color: ${(props) => (props.secondCard ? "white" : "transparent")};
  color: ${(props) => (props.secondCard ? "black" : "white")};
  border-radius: ${(props) => (props.secondCard ? "10px" : "0")};

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
  @media ${media.mobile} {
    padding: 1rem 0;

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

const SecondCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  .DetailsContainer {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80%;

    gap: 20px;
  }

  .IconContaienr {
    height: 100%;
    width: 30%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    .Icon {
      width: 80%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 10px;
      background-color: #eaeaea;
      overflow: hidden;
    }

    img {
      width: 60%;
      height: 50%;
    }
  }

  @media ${media.mobile} {
    .DetailsContainer {
      padding: 1rem;
      gap: 10px;
    }

    .IconContaienr {
      width: 100%;
      margin-right: 0;
      margin-top: 1rem;

      .Icon {
        width: 50%;
        height: 50%;
      }

      img {
        width: 40%;
        height: 40%;
      }
    }
  }
`;
export default SliderComponent;
