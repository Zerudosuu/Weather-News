const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;

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

export const fetchGeolocation = async (
  cityName: string,
  state?: string, // Make state optional
  country?: string, // Make country optional
): Promise<{ lat: number; lon: number }[]> => {
  const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;
  const GEOLOCATIONURL = "https://api.openweathermap.org/geo/1.0/direct?";

  if (!cityName) {
    console.log("Please provide a valid city value.");
    return []; // Ensure this returns an array type, even if empty
  }

  // Construct the query string dynamically
  let query = `${cityName}`;
  if (state) {
    query += `,${state}`;
  }
  if (country) {
    query += `,${country}`;
  }

  return await handleFetch(`${GEOLOCATIONURL}q=${query}&appid=${APIKEY}`);
};

export const fetchWeather = async (lat: number, lon: number) => {
  const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;
  const WEATHERURL = "https://api.openweathermap.org/data/2.5/weather?";

  return await handleFetch(
    `${WEATHERURL}lat=${lat}&lon=${lon}&appid=${APIKEY}`,
  );
};

export const fetch5DaysForeCast = async (lat: number, lon: number) => {
  const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;
  const FORECASTURL = "https://api.openweathermap.org/data/2.5/forecast/daily?";

  return await handleFetch(
    `${FORECASTURL}lat=${lat}&lon=${lon}&cnt=5&appid=${APIKEY}&units=metric`,
  );
};
