import styled from "styled-components";

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
function FrequentlyAskedQuestion() {
  return (
    <FrequentlyAskedQuestionStyle>
      <h2>
        FREQUENTLY ASKED <br /> QUESTIONS
      </h2>
      <div className="DetailsContainer">
        <details>
          <summary>
            What is this website about?
            <div className="icon">
              <h1>+</h1>
            </div>
          </summary>
          <p>
            This website showcases the portfolio of Ronald Salvador, a game
            developer and software engineer based in Naga City, Philippines.
          </p>
        </details>
        <details>
          <summary>
            What projects are featured here?
            <div className="icon">
              <h1>+</h1>
            </div>
          </summary>
          <p>
            The portfolio includes a variety of projects, from games developed
            using Unity to web-based applications created during internships and
            professional engagements.
          </p>
        </details>
        <details>
          <summary>
            How can I contact you?
            <div className="icon">
              <h1>+</h1>
            </div>
          </summary>
          <p>
            You can reach out via the contact form on the website or through his
            professional email listed on the "Contact" section.
          </p>
        </details>
        <details>
          <summary>
            What software and tools do you use?
            <div className="icon">
              <h1>+</h1>
            </div>
          </summary>
          <p>
            I am specializes in game development with Unity, software
            engineering, and web development using modern frameworks and tools
            such as React and for MERN for tech stack.
          </p>
        </details>
      </div>
    </FrequentlyAskedQuestionStyle>
  );
}

const FrequentlyAskedQuestionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 5rem;
  min-height: 50vh;
  height: auto;
  width: 100%;
  background-color: white;
  color: #242424;
  gap: 4rem;
  z-index: 1;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 3rem;
    text-align: center;
    line-height: 1;
    letter-spacing: -3px;
  }

  .DetailsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    details {
      width: 100%;
      margin-bottom: 1rem;
      background: #ffff;
      border-radius: 8px;
      overflow: hidden;
      position: relative;

      .icon {
        position: absolute;
        top: 15px;
        right: 20px;
      }

      summary {
        height: 5rem;
        font-size: 1.5rem;
        font-weight: 500;
        padding: 1rem;
        cursor: pointer;
        list-style: none;
        outline: none;
        color: #242424;
        background-color: #f3f3f3;
        border-bottom: 1px solid #e0e0e0;
        display: flex;
        align-items: center;

        &:hover {
          background-color: #a9a9a9;
        }
      }

      p {
        padding: 1rem;
        font-size: 1rem;
        line-height: 1.5;
        background-color: #f3f3f3;
        color: #242424;
      }
    }

    @media ${media.mobile} {
      details {
        summary {
          font-size: 1.2rem;
        }

        p {
          font-size: 1rem;
        }
      }
    }
  }

  @media ${media.mobile} {
    padding: 2rem;
    h2 {
      font-size: 1.5rem;
    }

    .DetailsContainer {
      gap: 10px;
    }
  }
`;

export default FrequentlyAskedQuestion;
