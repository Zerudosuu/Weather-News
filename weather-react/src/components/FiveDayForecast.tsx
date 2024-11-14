import { useContext } from "react";
import styled from "styled-components";
import { WeatherAppContext } from "../context/weatherAppContext.ts";

const FiveDayForecast = ({ fiveDaysForecast }: { fiveDaysForecast: any }) => {
  const weatherContext = useContext(WeatherAppContext);
  const { activeIndex, setActiveIndex } = weatherContext;

  return (
    <>
      {fiveDaysForecast.list.map((day, index: number) => (
        <FiveDayForecastContainer
          key={index}
          onClick={() => setActiveIndex(index)}
          isActive={activeIndex === index}
          isAdjacentBelow={activeIndex === index - 1}
          isAdjacentTop={activeIndex === index + 1}
        >
          <h3>
            {new Date(day.dt * 1000).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </h3>
          <h5>
            {new Date(day.dt * 1000).toLocaleDateString("en-US", {
              weekday: "long",
            })}
          </h5>
        </FiveDayForecastContainer>
      ))}
    </>
  );
};

const FiveDayForecastContainer = styled.div<{
  isActive: boolean;
  isAdjacentBelow: boolean;
  isAdjacentTop: boolean;
}>`
  width: 100%;
  height: 100%;
  background-color: ${({ isActive }) => (isActive ? "transparent" : "#f9f9f9")};
  cursor: pointer;
  padding: 10px;
  display: flex;
  flex-direction: column;
  caret-color: transparent;
  justify-content: center;
  align-items: center;
  border-top-right-radius: ${({ isActive, isAdjacentTop, isAdjacentBelow }) =>
    isActive ? "0px" : isAdjacentTop ? "0" : isAdjacentBelow ? "50px" : "0"};
  border-bottom-right-radius: ${({
    isActive,
    isAdjacentTop,
    isAdjacentBelow,
  }) =>
    isActive ? "0px" : isAdjacentTop ? "50px" : isAdjacentBelow ? "0" : "0"};

  h3,
  h5 {
    color: ${({ isActive }) => (isActive ? "#f9f9f9" : "black")};
  }
`;

export default FiveDayForecast;
