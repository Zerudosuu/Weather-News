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

const WeatherIcon = ({
  condition,
  iconSize = 24,
  iconColor = "black",
}: WeatherIconsProps) => {
  // Define the mapping of weather conditions to icons
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

  // Get the appropriate icon component
  const IconComponent = weatherIcons[condition] || Search;

  return <IconComponent size={iconSize} color={iconColor} />;
};

export default WeatherIcon;
