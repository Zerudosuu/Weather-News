export const fetchGeolocation = async (
  cityName: string,
  state: string,
  country: string,
): Promise<{ lat: number; lon: number }[]> => {
  // Specify the return type
  const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;
  const GEOLOCATIONURL = "https://api.openweathermap.org/geo/1.0/direct?";

  if (!cityName || !state || !country) {
    console.log("Please provide valid city, state, and country values.");
    return []; // Ensure this returns an array type, even if empty
  }

  try {
    const response = await fetch(
      `${GEOLOCATIONURL}q=${cityName},${state},${country}&appid=${APIKEY}`,
    );
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
