import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for a news article
type Article = {
  id: string; // Unique identifier for each article (can be the title or a unique ID)
  title: string;
  author: string;
  content: string;
  image: string;
};

// Define the context type
type NewsContextType = {
  articles: Article[];
  setArticles: (articles: Article[]) => void;

  categoryArticles: Article[];
  setCategoryArticles: (articles: Article[]) => void;
};

// Create the context with default values
const NewsContext = createContext<NewsContextType>({
  articles: [],
  setArticles: () => {},
  categoryArticles: [],
  setCategoryArticles: () => {},
});

// Custom hook to use the NewsContext
export const useNewsContext = () => useContext(NewsContext);

// Provider component to wrap around the app
export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [categoryArticles, setCategoryArticles] = useState<Article[]>([]);

  // Function to set the current index

  return (
    <NewsContext.Provider
      value={{
        articles,
        setArticles,
        categoryArticles,
        setCategoryArticles,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
