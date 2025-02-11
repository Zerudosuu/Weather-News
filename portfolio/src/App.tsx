import { Routes, Route } from "react-router";
import Lenis from "lenis";
import { useEffect } from "react";

import Home from "./Page/Home.tsx";
import Contact from "./Page/Contact.tsx";
import ErrorPage from "./Page/ErrorPage.tsx";
import Works from "./Page/Works.tsx";
import RootLayout from "./Layouts/RootLayout.tsx";
import Work from "./Page/Work.tsx";
import GlobalStyle from "./Styles/GlobalStyle.ts";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <GlobalStyle />
      <RootLayout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Works" element={<Works />} />
          <Route path="/Works/:id" element={<Work />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
