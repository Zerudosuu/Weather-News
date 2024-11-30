import Header from "../partials/Header.tsx";

import styled from "styled-components";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <RootMain>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </RootMain>
  );
};

const RootMain = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

export default RootLayout;
