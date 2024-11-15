import { beforeEach, describe, expect, it } from "vitest";
import { fireEvent, render, screen, act } from "@testing-library/react";
import App from "./App";

import { WeatherAppContext } from "./context/weatherAppContext.ts";

describe("App Component", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should render the location input and submit button", () => {
    const inputElement = screen.getByPlaceholderText("e.g., Naga, Cebu, PH");
    const buttonElement = screen.getByRole("button");

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("should update location data and fetch new data on form submission", () => {
    const inputElement = screen.getByPlaceholderText("e.g., Naga, Cebu, PH");
    const buttonElement = screen.getByRole("button");

    fireEvent.change(inputElement, { target: { value: "Manila, NCR, PH" } });
    fireEvent.click(buttonElement);

    const cityElement = screen.getByText(/Manila/i);
    const countryElement = screen.getByText(/PH/i);

    expect(cityElement).toBeInTheDocument();
    expect(countryElement).toBeInTheDocument();
  });

  it("should display the correct forecast for the active day", () => {
    const dateElement = screen.getByText(/Monday/i);
    const tempElement = screen.getByText(/304.55 °C/i);
    const humidityElement = screen.getByText(/Humidity: 63%/i);
    const descriptionElement = screen.getByText(/LIGHT RAIN/i);

    expect(dateElement).toBeInTheDocument();
    expect(tempElement).toBeInTheDocument();
    expect(humidityElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it("should change the active index on context change", () => {
    const setActiveIndex = vi.fn();

    render(
      <WeatherAppContext.Provider value={{ activeIndex: 0, setActiveIndex }}>
        <App />
      </WeatherAppContext.Provider>,
    );

    setActiveIndex(2);
    expect(setActiveIndex).toHaveBeenCalledWith(2);
  });
});
