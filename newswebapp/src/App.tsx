import RootLayout from "./components/Layouts/RootLayout.tsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import News from "./pages/News.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
import CategoryLayout from "./components/Layouts/CategoryLayout.tsx";
import NewsDetailLayout from "./components/Layouts/NewsDetailLayout.tsx";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />

        {/* Routes under CategoryLayout */}
        <Route element={<CategoryLayout />}>
          <Route path="/:categoryName" element={<CategoryPage />} />
        </Route>

        {/* Routes under NewsDetailLayout */}
        <Route element={<NewsDetailLayout />}>
          <Route path="/:categoryName/:categoryNews" element={<News />} />
        </Route>

        {/* Single news item route */}
        <Route path="/news/:id" element={<News />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
