import { fetch5DaysForeCast, fetchGeolocation } from "./api/weatherApi";
import { useEffect, useState } from "react";
import styled from "styled-components";
import FiveDayForecast from "./components/FiveDayForecast.tsx";
import { WeatherAppContext } from "./context/weatherAppContext.ts";
import { Search } from "lucide-react";

function App() {
  const [locationData, setLocationData] = useState<{
    city: string;
    state: string;
    country: string;
  }>({
    city: "Naga",
    state: "Cebu",
    country: "Philippines",
  });
  const [latLon, setLatLon] = useState<{ lat: number; lon: number }>({
    lat: 0,
    lon: 0,
  });

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [fiveDaysForecast, setFiveDaysForecast] = useState<any>();

  useEffect(() => {
    getGeolocation();
  }, [locationData]);

  const getGeolocation = async () => {
    const geolocationData = await fetchGeolocation(
      locationData.city,
      locationData.state || "",
      locationData.country || "",
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
                <h5 style={{ color: "white", opacity: "70%" }}>
                  {new Date(
                    fiveDaysForecast.list[activeIndex].dt * 1000,
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

              <div className="weatherDescriptionAndIcon">
                <p>Weather description</p>
                <h1>
                  {fiveDaysForecast.list[
                    activeIndex
                  ].weather[0].description.toUpperCase()}
                </h1>
              </div>

              {/*  /!*<h1>*!/*/}
              {/*  /!*  {new Date(*!/*/}
              {/*  /!*    fiveDaysForecast[activeIndex].dt * 1000,*!/*/}
              {/*  /!*  ).toLocaleTimeString("en-US", {*!/*/}
              {/*  /!*    hour: "2-digit",*!/*/}
              {/*  /!*    minute: "2-digit",*!/*/}
              {/*  /!*    hour12: true, // set to false if you want 24-hour format*!/*/}
              {/*  /!*  })}*!/*/}
              {/*  /!*</h1>*!/*/}
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
      justify-content: space-around;
      border: none;
      background-color: transparent;
    }

    section {
      border: none;
      width: 100%;
      height: 100%;
      display: grid;
      grid-auto-rows: 100px 1fr;
      padding-left: 30px;
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
