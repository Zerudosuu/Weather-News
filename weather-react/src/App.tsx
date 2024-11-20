import { fetch5DaysForeCast, fetchGeolocation } from "./api/weatherApi";
import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import FiveDayForecast from "./components/FiveDayForecast.tsx";
import { WeatherAppContext } from "./context/weatherAppContext.ts";
import {
  Search,
  CloudRain,
  Tornado,
  CloudLightning,
  CloudSnow,
  CloudFog,
  Cloud,
  CloudDrizzle,
  Sun,
  Wind,
} from "lucide-react";

function App() {
  const [locationData, setLocationData] = useState<{
    city: string;
    state?: string;
    country?: string;
  }>({
    city: "Naga",
    state: "",
    country: "Philippines",
  });
  const [latLon, setLatLon] = useState<{ lat: number; lon: number }>({
    lat: 0,
    lon: 0,
  });

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [fiveDaysForecast, setFiveDaysForecast] = useState<any>({
    city: {
      id: 1698822,
      name: "Naga City",
      coord: {
        lon: 123.1889,
        lat: 13.6218,
      },
      country: "PH",
      population: 0,
      timezone: 28800,
    },
    cod: "200",
    message: 3.9127432,
    cnt: 5,
    list: [
      {
        dt: 1731639600,
        sunrise: 1731620817,
        sunset: 1731662217,
        temp: {
          day: 304.55,
          min: 298.02,
          max: 304.55,
          night: 298.6,
          eve: 302.3,
          morn: 298.02,
        },
        feels_like: {
          day: 309.7,
          night: 299.6,
          eve: 307.65,
          morn: 298.99,
        },
        pressure: 1010,
        humidity: 63,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        speed: 2.24,
        deg: 15,
        gust: 3.57,
        clouds: 100,
        pop: 0.54,
        rain: 0.35,
      },
      {
        dt: 1731726000,
        sunrise: 1731707244,
        sunset: 1731748613,
        temp: {
          day: 302.73,
          min: 298.17,
          max: 303.09,
          night: 298.65,
          eve: 298.83,
          morn: 298.17,
        },
        feels_like: {
          day: 306.55,
          night: 299.55,
          eve: 299.73,
          morn: 299.13,
        },
        pressure: 1007,
        humidity: 67,
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "moderate rain",
            icon: "10d",
          },
        ],
        speed: 8.44,
        deg: 331,
        gust: 15,
        clouds: 99,
        pop: 0.89,
        rain: 8.16,
      },
      {
        dt: 1731812400,
        sunrise: 1731793672,
        sunset: 1731835009,
        temp: {
          day: 299.61,
          min: 297.79,
          max: 300.52,
          night: 298.7,
          eve: 300.06,
          morn: 297.79,
        },
        feels_like: {
          day: 299.61,
          night: 299.63,
          eve: 303.15,
          morn: 298.74,
        },
        pressure: 1006,
        humidity: 88,
        weather: [
          {
            id: 502,
            main: "Rain",
            description: "heavy intensity rain",
            icon: "10d",
          },
        ],
        speed: 8.03,
        deg: 257,
        gust: 15.7,
        clouds: 100,
        pop: 0.94,
        rain: 25.25,
      },
      {
        dt: 1731898800,
        sunrise: 1731880100,
        sunset: 1731921407,
        temp: {
          day: 304.57,
          min: 298.15,
          max: 304.57,
          night: 298.54,
          eve: 300.22,
          morn: 298.21,
        },
        feels_like: {
          day: 309.46,
          night: 299.46,
          eve: 303.66,
          morn: 299.15,
        },
        pressure: 1010,
        humidity: 62,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        speed: 2.11,
        deg: 131,
        gust: 4.43,
        clouds: 85,
        pop: 0.84,
        rain: 1.66,
      },
      {
        dt: 1731985200,
        sunrise: 1731966529,
        sunset: 1732007805,
        temp: {
          day: 304.14,
          min: 297.66,
          max: 304.14,
          night: 298.15,
          eve: 300.31,
          morn: 297.66,
        },
        feels_like: {
          day: 308.74,
          night: 299.08,
          eve: 303.56,
          morn: 298.57,
        },
        pressure: 1011,
        humidity: 63,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        speed: 3.83,
        deg: 48,
        gust: 6.25,
        clouds: 63,
        pop: 0.53,
        rain: 0.71,
      },
    ],
  });
  const weatherIcons = {
    Clear: Sun,
    Clouds: Cloud,
    Rain: CloudRain,
    Drizzle: CloudDrizzle,
    Thunderstorm: CloudLightning,
    Snow: CloudSnow,
    Mist: CloudFog,
    Smoke: CloudFog,
    Haze: CloudFog,
    Dust: CloudFog,
    Fog: CloudFog,
    Sand: CloudFog,
    Ash: CloudFog,
    Squall: Wind,
    Tornado: Tornado,
  };

  useEffect(() => {
    const getGeolocation = async () => {
      const geolocationData = await fetchGeolocation(
        locationData.city,
        locationData.state || "",
        locationData.country || ""
      );
      if (geolocationData.length > 0) {
        setLatLon({
          lat: geolocationData[0].lat,
          lon: geolocationData[0].lon,
        });

        await get5daysForecast();
      } else {
        console.log("No geolocation data found.");
      }
    };
    getGeolocation();
  }, [locationData]);

  const get5daysForecast = async () => {
    const daysOfForecast = await fetch5DaysForeCast(latLon.lat, latLon.lon);

    if (daysOfForecast.length !== null) {
      setFiveDaysForecast(daysOfForecast);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("button was pressed");

    const city = e.target.elements.locationInput.value;
    const cityArray = city.split(",");
    setLocationData({
      city: cityArray[0].trim(),
      state: cityArray[1]?.trim() || "",
      country: cityArray[2]?.trim() || "",
    });

    // No need to call `getGeolocation()` directly here
  };

  return (
    <WeatherAppContext.Provider value={{ activeIndex, setActiveIndex }}>
      <AppContainer>
        <main>
          <aside>
            <FiveDayForecast fiveDaysForecast={fiveDaysForecast} />
          </aside>
          <section>
            <div className="formLocation">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="locationInput" // Add the name attribute here
                  id="location-input"
                  placeholder="e.g., Naga, Cebu, PH"
                />
                <button type="submit">
                  <Search size={24} />
                </button>
              </form>
            </div>

            <div className="weatherData">
              <div className="weatherCelsiusAndLocation">
                <div>
                  <h5 style={{ color: "white", opacity: "70%" }}>
                    {new Date(
                      fiveDaysForecast.list[activeIndex].dt * 1000
                    ).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </h5>
                  <h1>{fiveDaysForecast.list[activeIndex].temp.day} °C</h1>
                  <h4>
                    {locationData.city +
                      ", " +
                      locationData.country +
                      " |  Humidity: " +
                      fiveDaysForecast.list[activeIndex].humidity}
                    %
                  </h4>
                </div>

                <div className="weatherIcon">
                  {(() => {
                    const WeatherIconComponent =
                      weatherIcons[
                        fiveDaysForecast.list[activeIndex].weather[0].main
                      ] || null;
                    return WeatherIconComponent ? (
                      <WeatherIconComponent size={350} color="white" />
                    ) : (
                      <p>No icon available</p>
                    );
                  })()}
                </div>
              </div>

              <div className="weatherDescriptionAndIcon">
                <p>Weather description</p>
                <h1>
                  {fiveDaysForecast.list[
                    activeIndex
                  ].weather[0].description.toUpperCase()}
                </h1>
              </div>
            </div>
          </section>
        </main>
      </AppContainer>
    </WeatherAppContext.Provider>
  );
}

const AppContainer = styled.div`
  width: 100svw;
  height: 100svh;
  display: grid;
  backdrop-filter: blur(6px) saturate(33%);
  -webkit-backdrop-filter: blur(6px) saturate(33%);
  background-color: rgba(17, 25, 40, 0.73);
  background-size: cover;
  background-image: url("../src/assets/Nature-wallpapers-Full-HD-backgroud.jpg");

  main {
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    backdrop-filter: blur(6px) saturate(33%);
    -webkit-backdrop-filter: blur(6px) saturate(33%);
    background-color: rgba(17, 25, 40, 0.73);

    aside {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: transparent;
    }

    section {
      border: none;
      width: 100%;
      height: 100%;
      display: grid;
      grid-auto-rows: 100px 1fr;
      padding: 0 30px;
      .formLocation {
        display: flex;
        justify-content: end;
        align-items: center;
        color: #f9f9f9;
        padding: 20px;

        form {
          position: relative;
          width: 20%;
          display: flex;
          align-items: center;

          input {
            width: 100%;
            padding: 20px 40px;
            background-color: #f9f9f9;
            border-radius: 15px;
            font-size: 16px;
          }

          button {
            height: 100%;
            position: absolute;
            right: 0;
            background-color: transparent;
            border-radius: 20%;
            border: none;

            &:hover {
              color: #f9f9f9;
              background-color: beige;
            }
          }
        }
      }

      .weatherData {
        display: flex;
        flex-direction: column;
        padding: 20px;

        .weatherCelsiusAndLocation {
          padding: 20px;
          display: flex;
          justify-content: space-between;

          .weatherIcon {
            position: absolute;
            right: 10%;
          }

          h1 {
            font-size: 120px;
            color: #f9f9f9;
          }

          h4 {
            color: #f9f9f9;
            opacity: 80%;
            font-weight: 300;
          }
        }

        .weatherDescriptionAndIcon {
          padding: 20px;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;

          h1 {
            font-size: 90px;
            color: white;
          }

          p {
            color: #f9f9f9;
            opacity: 70%;
          }
        }
      }
    }
  }
`;

export default App;
