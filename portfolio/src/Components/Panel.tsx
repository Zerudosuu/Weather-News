import styled from "styled-components";
import React from "react";

type PanelProps = {
  children?: React.ReactNode; // The children prop is optional
};

function Panel({ children }: PanelProps) {
  return <SamplePanel>{children}</SamplePanel>;
}

const SamplePanel = styled.div`
  position: absolute;
  min-height: 120vh;
  max-height: 200vh;
  height: auto;
  width: 100%;
  background-color: #242424;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  bottom: 0;
  color: white;
  padding: 5rem;
  z-index: 1;
`;

export default Panel;
