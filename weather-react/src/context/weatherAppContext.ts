import { createContext } from "react";

export const WeatherAppContext = createContext({
  activeIndex: 0,
  setActiveIndex: () => {},
});
