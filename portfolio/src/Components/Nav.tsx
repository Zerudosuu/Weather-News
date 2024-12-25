import styled from "styled-components";
import { motion } from "framer-motion";

function Nav() {
  return <NavBarFullSizeContainer>this is drop down</NavBarFullSizeContainer>;
}

const NavBarFullSizeContainer = styled(motion.div)`
  background-color: red;
  position: absolute;
  height: 100vh;
  width: 100%;
`;
export default Nav;
