import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import WeatherIcons from "./weatherIcons";

const DayForecastWeatherCard = ({
  forecast,
  getCurrentIndex,
  componentActive,
}: {
  forecast: any;
  getCurrentIndex: () => void;
  componentActive: boolean;
}) => {
  const date = new Date(forecast.dt * 1000).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <TouchableOpacity
      onPress={getCurrentIndex}
      style={[styles.container, componentActive && styles.activeContainer]}
    >
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.temp}>
        {Math.round(forecast.temp.day)}°C / {Math.round(forecast.temp.night)}°C
      </Text>
      <Text style={styles.weather}>{forecast.weather[0]?.description}</Text>
      <WeatherIcons condition={forecast.weather[0]?.main} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderColor: "#ff0505",
    // borderWidth: 4,
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  temp: {
    fontSize: 14,
    color: "#555",
  },
  weather: {
    fontSize: 12,
    color: "#777",
  },

  activeContainer: {
    backgroundColor: "#dbe9ff", // Light blue to highlight the active card
    borderColor: "#1e90ff", // Blue border for active state
    borderWidth: 2, // Adding border width when active
  },
});

export default DayForecastWeatherCard;
