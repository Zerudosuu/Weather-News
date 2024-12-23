import styled from "styled-components";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type Props = {
  Image: string;
  PropsHeight?: string;
};

function PhotoStagnantContainer({ Image, PropsHeight }: Props) {
  // Properly destructure props
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end center"], // Start enlarging earlier
  });
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <PhotoStagnantContainerStyle
      ref={container}
      style={{ height: PropsHeight }}
    >
      <PhotoContainer
        style={{
          scale: scale1,
        }}
      >
        <img src={Image} alt="Ronald Other Photo" />
      </PhotoContainer>
    </PhotoStagnantContainerStyle>
  );
}

const PhotoStagnantContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: -10px;
  overflow: hidden;
  z-index: 1;
  background-color: white;
  border-radius: 20px;
`;

const PhotoContainer = styled(motion.div)`
  display: inherit;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default PhotoStagnantContainer;
