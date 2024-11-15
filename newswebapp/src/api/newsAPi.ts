export const fetchNews = async () => {
  const APIKEY: string = import.meta.env.NEWS_API_KEY;
  const URL: string = `https://newsapi.org/v2/top-headlines/sources?apiKey=${APIKEY}`;

  const data = await fetch(URL);
  const response = await data.json();

  return response;
};
