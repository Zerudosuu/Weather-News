import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

type PhotoContainerProps = {
  children?: React.ReactNode; // The children prop is now optional
};

function PhotoContainer({ children }: PhotoContainerProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <PhotoContainerStyle ref={container}>
      <ImageContainer
        className="ImageContainer"
        style={{
          scale: scale1,
          opacity: opacity1,
        }}
      >
        <img src="/me.jpg" alt="Photo by Ronald Salvador" />
      </ImageContainer>

      {children && children}
    </PhotoContainerStyle>
  );
}

const PhotoContainerStyle = styled.div`
  height: 400vh; /* Extend the height to allow scrolling */
  z-index: 10;
  position: relative;
  background-color: var(--primary-color);
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: sticky;
  top: 0; /* Stick the element to the top of the viewport */
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default PhotoContainer;
