import { useContext } from "react";
import styled from "styled-components";
import { WeatherAppContext } from "../context/weatherAppContext.ts";

//BreakPoints
const sizes = {
  desktop: "1024px",
  tablet: "768px",
  mobile: "480px",
};

const media = {
  desktop: `(max-width: ${sizes.desktop})`,
  tablet: `(max-width: ${sizes.tablet})`,
  mobile: `(max-width: ${sizes.mobile})`,
};

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
  background-color: ${({ isActive }) => (isActive ? "transparent" : "White")};
  cursor: pointer;
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

  @media ${media.mobile} {
    width: 80%;

    border-top-right-radius: ${({
      isActive,
      isAdjacentTop,
      isAdjacentBelow,
    }) =>
      isActive ? "0px" : isAdjacentTop ? "50px" : isAdjacentBelow ? "0" : "0"};

    border-bottom-right-radius: ${({
      isActive,
      isAdjacentTop,
      isAdjacentBelow,
    }) =>
      isActive ? "0px" : isAdjacentTop ? "0" : isAdjacentBelow ? "0" : "0"};

    border-top-left-radius: ${({ isActive, isAdjacentTop, isAdjacentBelow }) =>
      isActive ? "0px" : isAdjacentTop ? "0" : isAdjacentBelow ? "50px" : "0"};

    h3,
    h5 {
      font-size: 16px;
    }
  }
`;

export default FiveDayForecast;
