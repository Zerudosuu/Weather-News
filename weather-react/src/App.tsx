import { fetchGeolocation, fetchWeather } from "./api/weatherApi";
import { useEffect, useState } from "react";

function App() {
  const [locationData, setLocationData] = useState<{
    city: string;
    state: string;
    country: string;
  }>({
    city: "Naga",
    state: "Cebu",
    country: "PH",
  });
  const [latLon, setLatLon] = useState<{ lat: number; lon: number }>({
    lat: 0,
    lon: 0,
  });

  useEffect(() => {
    getGeolocation();
  }, []); // Empty dependency array to run this only once on mount

  const getGeolocation = async () => {
    const geolocationData = await fetchGeolocation(
      locationData.city,
      locationData.state,
      locationData.country,
    );
    if (geolocationData.length > 0) {
      setLatLon({
        lat: geolocationData[0].lat,
        lon: geolocationData[0].lon,
      });
    } else {
      console.log("No geolocation data found.");
    }

    await getWeather();
  };

  const getWeather = async () => {
    const weatherData = await fetchWeather(latLon.lat, latLon.lon);
    console.log("Weather Response:", weatherData);
  };

  return <div>this is App</div>;
}

export default App;
