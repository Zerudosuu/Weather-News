import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

type PhotoContainerProps = {
  children?: React.ReactNode;
};

const sizes = {
  desktop: "1024px",
  tablet: "768px",
  mobile: "480px",
};

const media = {
  desktop: `(max-width: ${sizes.desktop})`,
  tablet: `(max-width: ${sizes.tablet})`,
  mobile: `(max-width: ${sizes.mobile})`,
};

function PhotoContainer({ children }: PhotoContainerProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 2]);
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
  height: 400vh;
  z-index: 10;
  position: relative;
  background-color: var(--primary-color);
  display: flex;
  width: auto;
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: sticky;
  top: 0;
  width: 100vw; /* Ensure it does not exceed the viewport width */
  z-index: -1;
  border: 1px solid red;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${media.mobile} {
    height: 100vh;
    width: 100%;

    img {
      height: 100vh;
      width: 100%;
    }
  }
`;

export default PhotoContainer;
