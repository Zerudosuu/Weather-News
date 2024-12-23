import { Routes, Route, useLocation } from "react-router";
import Lenis from "lenis";
import { useEffect } from "react";

import Home from "./Page/Home.tsx";
import Contact from "./Page/Contact.tsx";
import ErrorPage from "./Page/ErrorPage.tsx";
import Works from "./Page/Works.tsx";
import RootLayout from "./Layouts/RootLayout.tsx";
import Work from "./Page/Work.tsx";

// import Header from "./Partials/Header.tsx";

function App() {
  const location = useLocation();
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
      {/*<Header />*/}
      <RootLayout>
        <Routes location={location} key={location.pathname}>
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
