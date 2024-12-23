import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./Styles/GlobalStyle.ts";
import ScrollToTop from "./Components/ScrollToTop.ts";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
