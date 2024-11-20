import RootLayout from "./components/Layouts/RootLayout.tsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";

import NotFoundPage from "./pages/NotFoundPage.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
import CategoryLayout from "./components/Layouts/CategoryLayout.tsx";
import SearchPage from "./components/Layouts/SearchPage.tsx";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />

        {/* Routes under CategoryLayout */}
        <Route element={<CategoryLayout />}>
          <Route path="/:categoryName" element={<CategoryPage />} />
        </Route>
        <Route path="/search" element={<SearchPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
