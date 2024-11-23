const BASE_URL = "https://newsapi.org/v2";
const API_KEY = process.env.EXPO_PUBLIC_NEWS_API_KEY;

const handleFetch = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

export const fetchTopHeadlines = async (
  country: string,
  pageSize: number = 10
) => {
  const url = `${BASE_URL}/top-headlines?country=${country}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  return await handleFetch(url);
};

export const fetchCategories = async (
  category: string,
  country: string,
  pageSize: number = 10
) => {
  const url = `${BASE_URL}/top-headlines?category=${category}&country=${country}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  return await handleFetch(url);
};

export const searchNews = async (query: string, pageSize: number = 10) => {
  const url = `${BASE_URL}/everything?q=${encodeURIComponent(
    query
  )}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  return await handleFetch(url);
};
