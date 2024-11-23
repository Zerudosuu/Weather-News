const APIKEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

const handleFetch = async (url: string) => {
  try {
    const response = await fetch(url);
    console.log("Response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Response error text:", errorText);
      throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch error:", error.message);
    } else {
      console.error("Fetch error:", error);
    }
    throw error; // Rethrow to catch it in calling code
  }
};

export const fetchGeolocation = async (
  cityName: string,
  state?: string, // Make state optional
  country?: string // Make country optional
): Promise<{ lat: number; lon: number }[]> => {
  const GEOLOCATIONURL = "https://api.openweathermap.org/geo/1.0/direct?";

  if (!cityName && !APIKEY) {
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
  const WEATHERURL = "https://api.openweathermap.org/data/2.5/weather?";

  return await handleFetch(
    `${WEATHERURL}lat=${lat}&lon=${lon}&appid=${APIKEY}`
  );
};

export const fetch5DaysForeCast = async (lat: number, lon: number) => {
  const FORECASTURL = "https://api.openweathermap.org/data/2.5/forecast/daily?";

  return await handleFetch(
    `${FORECASTURL}lat=${lat}&lon=${lon}&cnt=6&appid=${APIKEY}&units=metric`
  );
};

export const fetch3HourIntervalForecast = async (lat: number, lon: number) => {
  const WEATHERURL = "https://api.openweathermap.org/data/2.5/forecast";
  return await handleFetch(
    `${WEATHERURL}?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&cnt=5`
  );
};
