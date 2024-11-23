import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import WeatherIcons from "./weatherIcons";

const WeatherCard = ({ weather, index }: { weather: any; index: number }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
      month: "short", // 'Nov'
      day: "numeric", // '21'
      hour: "numeric", // '3'
      minute: "2-digit", // 'AM'
      hour12: true, // To show AM/PM
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontWeight: 900, alignItems: "center" }}>
        {" "}
        {formatDate(weather.dt_txt)}
      </Text>
      <View>
        <WeatherIcons condition={weather.weather[0]?.main} iconSize={40} />
        <Text style={{ fontSize: 16, alignSelf: "center" }}>
          {weather.weather[0].main}
        </Text>
      </View>
      <Text style={{ fontSize: 18 }}>{weather.main.temp} °C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0edff",
    borderRadius: 20,
    padding: 15,
    margin: 5,
    elevation: 5,
    width: 100,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default WeatherCard;
