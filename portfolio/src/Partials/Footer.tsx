import styled from "styled-components";
import GlobalStyle from "../Styles/GlobalStyle.ts";

// function SocialLinks() {
//   return (
//     <SocialLinksStyle>
//       <p> this is SocialLinks</p>
//     </SocialLinksStyle>
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

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return <Button onClick={scrollToTop}>↑</Button>;
};

const Button = styled.button`
  bottom: 2rem;
  right: 2rem;
  background-color: var(--accent-color);
  color: var(--primary-color);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1.5rem;
  font-weight: bold;

  pointer-events: all;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
  }

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease;
  }

  @media ${media.mobile} {
    width: 30px;
    height: 30px;
    font-size: 1.2rem;
  }
`;

function Footer() {
  return (
    <>
      <GlobalStyle />
      <FooterStyle>
        {/*<SocialLinks />*/}
        <div className="NameAndYearFooter">
          <h1> RONALD SALVADOR</h1>
          <div className="bottomCointainer">
            <p> @2024 RONALD SALVADOR PORTFOLIO</p>
            <ScrollToTop />
          </div>
        </div>
      </FooterStyle>
    </>
  );
}

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  color: var(--primary-color);
  height: auto;
  position: sticky;
  bottom: 0;
  z-index: 0;

  .NameAndYearFooter {
    h1 {
      font-size: 10rem;
      font-weight: 800;
      letter-spacing: -10px;
      line-height: 0.7;
    }

    .bottomCointainer {
      display: flex;
      justify-content: space-between;
      padding: 20px 1rem;

      p {
        font-size: 1rem;
        font-weight: 400;
      }
    }

    @media ${media.mobile} {
      h1 {
        margin-top: 1rem;
        font-size: 3rem;
      }

      .bottomCointainer {
        padding: 10px 1rem;
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

// const SocialLinksStyle = styled.div`
//   display: flex;
// `;

export default Footer;
