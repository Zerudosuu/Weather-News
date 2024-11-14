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

  try {
    const response = await fetch(`${GEOLOCATIONURL}q=${query}&appid=${APIKEY}`);
    const data = await response.json();
    console.log("Geolocation Response:", data);
    return data; // Ensure this returns the data properly
  } catch (e) {
    console.error("Error fetching geolocation data:", e);
    return []; // Return an empty array on error
  }
};

export const fetchWeather = async (lat: number, lon: number) => {
  const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;
  const WEATHERURL = "https://api.openweathermap.org/data/2.5/weather?";

  try {
    const response = await fetch(
      `${WEATHERURL}lat=${lat}&lon=${lon}&appid=${APIKEY}`,
    );
    const data = await response.json();

    return data; // Returns the weather data
  } catch (e) {
    console.error("Error fetching weather data:", e);
  }
};

export const fetch5DaysForeCast = async (lat: number, lon: number) => {
  const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;
  const FORECASTURL = "https://api.openweathermap.org/data/2.5/forecast/daily?";

  try {
    const response = await fetch(
      `${FORECASTURL}lat=${lat}&lon=${lon}&cnt=5&appid=${APIKEY}&units=metric`,
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error("Error fetching 5 day weather forecast data:", e);
  }
};
