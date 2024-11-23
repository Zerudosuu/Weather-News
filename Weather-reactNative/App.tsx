import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  View,
  Alert,
} from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import BottomSheet from "./src/components/BottomSheet";
import WeatherCard from "./src/components/3hourIntervalWeatherCard"; // Replace with your WeatherCard component
import { Ionicons } from "@expo/vector-icons";
import { useCallback, useEffect, useRef, useState } from "react";
import DayForecastWeatherCard from "./src/components/DayForecastWeatherCard";

import {
  fetch3HourIntervalForecast,
  fetch5DaysForeCast,
  fetchGeolocation,
} from "./src/api/weatherApi";
import WeatherIcons from "./src/components/weatherIcons";

const App = (): JSX.Element => {
  const ref = useRef(null);
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

  const [ThreeHoutIntervalWeather, setThreeHourIntervalWeather] = useState<any>(
    {}
  );

  const [activeIndex, setActiveIndex] = useState(0);

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
        await get3HourIntervalForecast();
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

  const get3HourIntervalForecast = async () => {
    const threeHourIntervalWeatherData = await fetch3HourIntervalForecast(
      latLon.lat,
      latLon.lon
    );

    if (threeHourIntervalWeatherData.length !== null) {
      setThreeHourIntervalWeather(threeHourIntervalWeatherData);
    }
  };

  const handleSubmit = (searchText: string) => {
    console.log("button was pressed");

    const city = searchText;
    const cityArray = city.split(",");
    setLocationData({
      city: cityArray[0].trim(),
      state: cityArray[1]?.trim() || "",
      country: cityArray[2]?.trim() || "",
    });

    // No need to call `getGeolocation()` directly here
  };

  const getCurrentIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ImageBackground
        source={require("./assets/SampleBg.png")} // Replace with your image path
        style={styles.container}
        resizeMode="cover" // Ensures the image covers the entire area
      >
        <StatusBar style="dark" />

        <View style={styles.overlay}></View>
        <View style={styles.AppScreenContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search here..."
            // value={searchText}
            returnKeyType="search" // Sets the return key to "Search"
            onSubmitEditing={(event) => handleSubmit(event.nativeEvent.text)}
          />

          <View style={styles.currentWeatherContainer}>
            <Text style={{ color: "black", fontSize: 24 }}>
              {[locationData.city, locationData.state, locationData.country]
                .filter((part) => part) // Remove empty parts
                .join(", ")}{" "}
              {/* Join the non-empty parts with a comma */}
            </Text>

            <WeatherIcons
              condition={fiveDaysForecast.list[0].weather[0]?.main}
              iconSize={200}
              iconColor="black"
            />
            <Text style={{ color: "black", fontSize: 60 }}>
              {Math.round(fiveDaysForecast.list[0].temp.day)} °C
            </Text>
            <Text style={{ color: "black", fontSize: 18 }}>
              {fiveDaysForecast.list[0].weather[0].description.toUpperCase()}
            </Text>
          </View>
        </View>

        <BottomSheet>
          <View style={styles.bottomSheetHourWeatherContainer}>
            <Text style={{ color: "white", fontSize: 14 }}>
              Weather every 3 hours
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.weatherCardContainer}
            >
              {ThreeHoutIntervalWeather.list?.map(
                (weather: any, index: number) => {
                  return (
                    <WeatherCard key={index} weather={weather} index={index} />
                  );
                }
              )}
            </ScrollView>
          </View>

          <View style={styles.dayForecast}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "900" }}>
              Weather for the next 5 days
            </Text>
            <ScrollView
              showsVerticalScrollIndicator={false} // Hides the vertical scroll indicator
              contentContainerStyle={styles.scrollContentContainer} // Helps with internal scroll view spacing
            >
              {fiveDaysForecast.list?.map((forecast: any, index: number) => (
                <DayForecastWeatherCard
                  key={index}
                  forecast={forecast}
                  getCurrentIndex={() => getCurrentIndex(index)}
                  componentActive={index === activeIndex}
                />
              ))}
            </ScrollView>
          </View>
        </BottomSheet>
      </ImageBackground>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
  },

  AppScreenContainer: {
    flex: 3 / 4.9,
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },

  currentWeatherContainer: {
    display: "flex",

    width: "100%",
    alignItems: "center",

    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#f2f2f2",
  },

  searchBar: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    width: "90%",
  },

  bottomSheetHourWeatherContainer: {
    padding: 10,

    height: 210,
    alignItems: "center",
    width: "100%",
    display: "flex",
    gap: 10,
  },

  weatherCardContainer: {
    marginHorizontal: 10,
    width: "100%",
    gap: 100,
  },

  // Updated Day Forecast Style
  dayForecast: {
    width: "100%",
    height: 550,
    padding: 10,
    gap: 10,
    backgroundColor: "#5271FF",
  },

  // // Content Container for ScrollView to manage spacing
  scrollContentContainer: {
    marginVertical: 10,
    // Horizontal padding for ScrollView content
    padding: 10, // Controls the spacing between each forecast card
  },
});

export default App;
