import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.35 },
  },
};

const fullscreenVariants = {
  hidden: {
    y: "100%",
    transition: { duration: 0.4 },
  },
  visible: {
    y: 0,
    transition: { duration: 0.3 },
  },
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

function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <HeaderStyleContainer>
        <StyledLink to={`/`}> RONALD </StyledLink>
        <ButtonCloseOpenContainer
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
            </svg>
          </motion.p>
        </ButtonCloseOpenContainer>
        <ButtonContactMeStyle
          as={motion.button}
          variants={opacity}
          initial={{ opacity: 0, y: "100%" }}
          animate={
            isActive ? { opacity: 0, y: "-100%" } : { opacity: 1, y: "0%" }
          }
          exit={{ opacity: 0, y: "100%" }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <Link to={`/Contact`}>Contact Me</Link>
        </ButtonContactMeStyle>
      </HeaderStyleContainer>

      <AnimatePresence mode="wait">
        {isActive && (
          <>
            {/* Background overlay */}
            <DarkOverlay
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Fullscreen menu */}
            <FullscreenMenu
              variants={fullscreenVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <button
                onClick={() => {
                  setIsActive(false);
                }}
              >
                X
              </button>

              <div className="AllRightReserve">
                <p>
                  @2024 RONALD SALVADOR PORTFOLIO | SOFTWARE AND GAME DEVELOPER
                </p>
              </div>
              <MenuContent>
                <ul>
                  <li>
                    <Link
                      to="/"
                      onClick={() => {
                        setIsActive(false);
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Works"
                      onClick={() => {
                        setIsActive(false);
                      }}
                    >
                      Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Contact"
                      onClick={() => {
                        setIsActive(false);
                      }}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </MenuContent>
            </FullscreenMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

const HeaderStyleContainer = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid pink;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;

  @media ${media.mobile} {
    padding: 0 2rem;
  }
`;

const DarkOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 10; /* Ensure it's behind the FullscreenMenu */
  pointer-events: none; /* Prevent interaction */
`;

const ButtonContactMeStyle = styled.button`
  background-color: pink;
  color: white;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;

  &:hover {
    background-color: #242424;
    color: white;
  }

  @media ${media.tablet} {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 2rem;
  letter-spacing: -2px;
  font-weight: bold;

  &:hover {
    color: pink;
  }
`;

const ButtonCloseOpenContainer = styled.button`
  display: flex;
  background-color: white;
  border: none;
  svg {
    width: 3rem;
    height: 3rem;
  }

  @media ${media.tablet} {
    svg {
      width: 3rem;
      height: 3rem;
    }
  }

  @media ${media.mobile} {
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const FullscreenMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 20; /* Ensure it's above the DarkOverlay */
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid black;

  button {
    background-color: #242424;
    color: white;
    border-radius: 50px;
    cursor: pointer;
    padding: 1.1rem 1.5rem;
    font-size: 1.5rem;
    border: none;

    &:hover {
      background-color: #ff5e9f;
    }

    position: absolute;
    top: 20px;
  }

  .AllRightReserve {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }

  @media ${media.tablet} {
    button {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }

    .AllRightReserve {
      bottom: 10px;
      left: 10px;

      p {
        font-size: 1rem;
      }
    }
  }

  @media ${media.mobile} {
    button {
      padding: 0.8rem 1rem;
      font-size: 1rem;
    }

    .AllRightReserve {
      bottom: 10px;
      left: 10px;

      p {
        font-size: 0.8rem;
      }
    }
  }
`;

const MenuContent = styled.div`
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      a {
        text-decoration: none;
        font-size: 9rem;
        line-height: 1.1;
        font-weight: 700;
        letter-spacing: -5px;
        color: black;
        position: relative;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px; /* Position the underline slightly below the text */
          width: 0%;
          height: 3px;
          background-color: pink;
          transition: width 0.3s ease;
        }

        &:hover {
          color: pink;

          &::after {
            width: 100%; /* Expand the underline on hover */
          }
        }
      }
    }
  }

  @media ${media.tablet} {
    ul {
      li {
        a {
          font-size: 6rem;
        }
      }
    }
  }

  @media ${media.mobile} {
    ul {
      li {
        a {
          font-size: 4rem;
        }
      }
    }
  }
`;

export default Header;
