import { createContext, Dispatch, SetStateAction } from "react";

interface WeatherAppContextType {
  activeIndex: number;

  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export const WeatherAppContext = createContext<WeatherAppContextType>({
  activeIndex: 0,

  setActiveIndex: () => {},
});
