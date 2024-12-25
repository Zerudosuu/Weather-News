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
              width="120"
              zoomAndPan="magnify"
              viewBox="0 0 829.5 869.999991"
              height="120"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <g />
              </defs>
              <g fill="#000000" fill-opacity="1">
                <g transform="translate(215.724605, 629.057269)">
                  <g>
                    <path d="M 34.359375 -342.625 L 227.765625 -342.625 C 247.722656 -342.625 265.640625 -338.453125 281.515625 -330.109375 C 297.390625 -321.765625 309.988281 -310.472656 319.3125 -296.234375 C 328.632812 -282.003906 333.296875 -266.050781 333.296875 -248.375 C 333.296875 -229.070312 330.269531 -213.859375 324.21875 -202.734375 C 318.164062 -191.609375 312.847656 -183.753906 308.265625 -179.171875 C 312.523438 -168.046875 317.109375 -151.191406 322.015625 -128.609375 C 324.304688 -118.140625 326.921875 -108.566406 329.859375 -99.890625 C 332.804688 -91.222656 336.898438 -86.890625 342.140625 -86.890625 L 364.71875 -86.890625 C 370.28125 -86.890625 374.613281 -85.332031 377.71875 -82.21875 C 380.832031 -79.113281 382.390625 -75.429688 382.390625 -71.171875 C 382.390625 -67.898438 381.082031 -64.957031 378.46875 -62.34375 C 381.082031 -59.070312 382.390625 -55.800781 382.390625 -52.53125 C 382.390625 -48.269531 381.082031 -44.832031 378.46875 -42.21875 C 381.082031 -39.59375 382.390625 -36.484375 382.390625 -32.890625 C 382.390625 -30.273438 381.410156 -27.65625 379.453125 -25.03125 C 383.046875 -22.082031 384.84375 -18.644531 384.84375 -14.71875 C 384.84375 -11.125 383.453125 -7.769531 380.671875 -4.65625 C 377.890625 -1.550781 374.207031 0 369.625 0 L 230.21875 0 L 204.203125 -102.59375 C 197.984375 -102.914062 191.351562 -104.140625 184.3125 -106.265625 C 177.28125 -108.398438 172.457031 -110.613281 169.84375 -112.90625 L 169.84375 0 L 34.359375 0 Z M 241.015625 -111.421875 L 241.015625 -101.125 L 214.515625 -102.109375 L 238.078125 -10.3125 L 365.21875 -10.3125 C 366.851562 -10.3125 368.566406 -10.71875 370.359375 -11.53125 C 372.160156 -12.351562 373.0625 -13.742188 373.0625 -15.703125 C 373.0625 -17.992188 372.078125 -19.46875 370.109375 -20.125 C 368.148438 -20.78125 366.351562 -21.109375 364.71875 -21.109375 L 350.96875 -21.109375 L 350.96875 -28.46875 L 365.21875 -28.46875 C 370.125 -28.46875 372.578125 -30.269531 372.578125 -33.875 C 372.578125 -37.46875 370.125 -39.265625 365.21875 -39.265625 L 350.96875 -39.265625 L 350.96875 -47.125 L 364.71875 -47.125 C 369.957031 -47.125 372.578125 -49.085938 372.578125 -53.015625 C 372.578125 -54.328125 371.921875 -55.554688 370.609375 -56.703125 C 369.296875 -57.847656 367.332031 -58.421875 364.71875 -58.421875 L 350.96875 -58.421875 L 350.96875 -66.265625 L 364.71875 -66.265625 C 366.351562 -66.265625 368.070312 -66.59375 369.875 -67.25 C 371.675781 -67.90625 372.578125 -69.210938 372.578125 -71.171875 C 372.578125 -74.773438 369.957031 -76.578125 364.71875 -76.578125 L 341.15625 -76.578125 C 334.613281 -76.578125 329.457031 -79.113281 325.6875 -84.1875 C 321.925781 -89.257812 319.226562 -94.984375 317.59375 -101.359375 C 315.957031 -107.742188 314.648438 -113.0625 313.671875 -117.3125 L 312.6875 -121.734375 C 309.082031 -137.773438 306.050781 -150.539062 303.59375 -160.03125 C 301.144531 -169.519531 298.53125 -176.632812 295.75 -181.375 C 292.96875 -186.125 289.445312 -189.476562 285.1875 -191.4375 C 280.9375 -193.40625 275.378906 -194.878906 268.515625 -195.859375 L 226.78125 -202.234375 L 228.25 -212.546875 L 270.46875 -206.171875 C 278.976562 -204.859375 285.769531 -202.972656 290.84375 -200.515625 C 295.914062 -198.066406 300.085938 -194.0625 303.359375 -188.5 C 307.285156 -193.082031 311.539062 -200.195312 316.125 -209.84375 C 320.707031 -219.5 323 -232.34375 323 -248.375 C 323 -264.414062 318.828125 -278.648438 310.484375 -291.078125 C 302.140625 -303.515625 290.765625 -313.414062 276.359375 -320.78125 C 261.960938 -328.144531 245.765625 -331.828125 227.765625 -331.828125 L 170.828125 -331.828125 L 162.96875 -326.4375 C 151.84375 -318.582031 139.570312 -309.335938 126.15625 -298.703125 C 112.738281 -288.066406 99.8125 -276.039062 87.375 -262.625 C 74.9375 -249.207031 64.707031 -234.394531 56.6875 -218.1875 C 48.675781 -201.988281 44.671875 -184.566406 44.671875 -165.921875 L 44.671875 -10.3125 L 158.546875 -10.3125 L 158.546875 -121.25 C 155.609375 -124.1875 152.421875 -127.78125 148.984375 -132.03125 C 145.546875 -136.289062 143.007812 -140.054688 141.375 -143.328125 C 139.40625 -143.328125 137.359375 -143.164062 135.234375 -142.84375 C 133.109375 -142.519531 130.410156 -142.359375 127.140625 -142.359375 C 121.898438 -142.359375 116.578125 -142.765625 111.171875 -143.578125 C 105.773438 -144.398438 101.28125 -145.789062 97.6875 -147.75 L 102.59375 -157.078125 C 104.882812 -155.765625 108.484375 -154.535156 113.390625 -153.390625 C 118.296875 -152.253906 123.367188 -151.6875 128.609375 -151.6875 C 130.566406 -151.6875 132.363281 -151.847656 134 -152.171875 C 135.644531 -152.492188 137.117188 -152.820312 138.421875 -153.15625 C 137.117188 -156.75 136.054688 -160.671875 135.234375 -164.921875 C 134.421875 -169.179688 134.015625 -173.929688 134.015625 -179.171875 C 134.015625 -194.222656 136.140625 -207.144531 140.390625 -217.9375 C 144.640625 -228.738281 148.972656 -237.082031 153.390625 -242.96875 C 157.816406 -248.863281 160.191406 -251.976562 160.515625 -252.3125 L 167.875 -245.4375 C 167.875 -245.4375 165.910156 -242.898438 161.984375 -237.828125 C 158.054688 -232.753906 154.128906 -225.304688 150.203125 -215.484375 C 146.273438 -205.671875 144.3125 -193.566406 144.3125 -179.171875 C 144.3125 -169.347656 146.601562 -159.523438 151.1875 -149.703125 C 155.769531 -139.890625 162.640625 -131.546875 171.796875 -124.671875 C 180.960938 -117.804688 192.582031 -114.046875 206.65625 -113.390625 Z M 241.015625 -111.421875 " />
                  </g>
                </g>
              </g>
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
  background-color: white;
  border-bottom: 1px solid pink;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
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
  background-color: #242424;
  color: white;
  padding: 1.1rem 0.8rem;
  border-radius: 50px;
  cursor: pointer;
  height: 80%;
  width: 100px;

  overflow: hidden;
  position: relative;

  :nth-child(2) {
    position: absolute;
    top: 31%;
  }

  p {
    font-size: 1.5rem;
    svg {
      position: absolute;
      top: -25px;
      left: -10px;
      background-color: white;
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
`;

export default Header;
