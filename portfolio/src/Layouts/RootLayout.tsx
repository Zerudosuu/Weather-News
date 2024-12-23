import React from "react";
import Footer from "../Partials/Footer.tsx";

import styled from "styled-components";
import Header from "../Partials/Header.tsx";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayoutContainerStyle>
      <Header />
      {children}
      <Footer />
    </RootLayoutContainerStyle>
  );
}

const RootLayoutContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
`;

export default RootLayout;
