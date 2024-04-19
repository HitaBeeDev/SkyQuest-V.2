import { createContext, useContext, useState } from "react";

const FlightContext = createContext();

export const useFlights = () => useContext(FlightContext);

export const FlightProvider = ({ children }) => {
  const initialCities = [
    { name: "New York City" },
    { name: "Tokyo" },
    { name: "London" },
    { name: "Paris" },
    { name: "Sydney" },
  ];

  const [searchTermDeparture, setSearchTermDeparture] = useState("");
  const [searchTermArrival, setSearchTermArrival] = useState("");
  const [filteredCitiesDeparture, setFilteredCitiesDeparture] = useState([]);
  const [filteredCitiesArrival, setFilteredCitiesArrival] = useState([]);

  const handleInputChangeDeparture = (event) => {
    const value = event.target.value;
    setSearchTermDeparture(value);
    const filteredCities = initialCities.filter((city) =>
      city.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCitiesDeparture(filteredCities);
  };

  const handleInputChangeArrival = (event) => {
    const value = event.target.value;
    setSearchTermArrival(value);
    const filteredCities = initialCities.filter((city) =>
      city.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCitiesArrival(filteredCities);
  };

  const handleInputFocusDeparture = () => {
    setFilteredCitiesDeparture(initialCities);
  };

  const handleInputFocusArrival = () => {
    setFilteredCitiesArrival(initialCities);
  };

  const handleCitySelectDeparture = (cityName) => {
    setSearchTermDeparture(cityName);
    setFilteredCitiesDeparture([]);
  };

  const handleCitySelectArrival = (cityName) => {
    setSearchTermArrival(cityName);
    setFilteredCitiesArrival([]);
  };

  return (
    <FlightContext.Provider
      value={{
        searchTermDeparture,
        searchTermArrival,
        filteredCitiesDeparture,
        filteredCitiesArrival,
        handleInputChangeDeparture,
        handleInputChangeArrival,
        handleInputFocusDeparture,
        handleInputFocusArrival,
        handleCitySelectDeparture,
        handleCitySelectArrival,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};

export default FlightContext;
