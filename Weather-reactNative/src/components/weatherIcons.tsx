import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import React from "react";

type WeatherCondition =
  | "Clear"
  | "Clouds"
  | "Rain"
  | "Drizzle"
  | "Thunderstorm"
  | "Snow"
  | "Mist"
  | "Smoke"
  | "Haze"
  | "Dust"
  | "Fog"
  | "Sand"
  | "Ash"
  | "Squall"
  | "Tornado";

interface WeatherIconsProps {
  condition: WeatherCondition;
  iconSize?: number;
  iconColor?: string;
}

const weatherIcons = ({
  condition,
  iconSize = 32,
  iconColor = "#000",
}: WeatherIconsProps) => {
  const weatherIcons = {
    Clear: "weather-sunny",
    Clouds: "weather-cloudy",
    Rain: "weather-rainy",
    Drizzle: "weather-partly-rainy",
    Thunderstorm: "weather-lightning",
    Snow: "weather-snowy",
    Mist: "weather-fog",
    Smoke: "weather-fog",
    Haze: "weather-hazy",
    Dust: "weather-dust",
    Fog: "weather-fog",
    Sand: "weather-sand",
    Ash: "weather-volcano",
    Squall: "weather-windy",
    Tornado: "weather-tornado",
  };

  const iconName: string = weatherIcons[condition] || "help_outline"; // Fallback icon
  return (
    <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />
  );
};

export default weatherIcons;
