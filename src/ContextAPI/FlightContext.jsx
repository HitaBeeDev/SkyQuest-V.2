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

  const [searchDeparture, setSearchDeparture] = useState("");
  const [searchArrival, setSearchArrival] = useState("");
  const [filteredDepartureCities, setFilteredDepartureCities] = useState([]);
  const [filteredArrivalCities, setFilteredArrivalCities] = useState([]);

  const handleDepartureInputChange = (event) => {
    const value = event.target.value;
    setSearchDeparture(value);
    const filteredCities = initialCities.filter((city) =>
      city.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDepartureCities(filteredCities);
  };

  const handleArrivalInputChange = (event) => {
    const value = event.target.value;
    setSearchArrival(value);
    const filteredCities = initialCities.filter((city) =>
      city.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredArrivalCities(filteredCities);
  };

  const handleDepartureInputFocus = () => {
    setFilteredDepartureCities(initialCities);
  };

  const handleArrivalInputFocus = () => {
    setFilteredArrivalCities(initialCities);
  };

  const handleDepartureCitySelect = (cityName) => {
    setSearchDeparture(cityName);
    setFilteredDepartureCities([]);
  };

  const handleCitySelectArrival = (cityName) => {
    setSearchArrival(cityName);
    setFilteredArrivalCities([]);
  };

  return (
    <FlightContext.Provider
      value={{
        setSearchDeparture,
        searchArrival,
        filteredDepartureCities,
        filteredArrivalCities,
        handleDepartureInputFocus,
        handleArrivalInputFocus,
        handleDepartureCitySelect,
        setFilteredDepartureCities,
        handleCitySelectArrival,
        handleArrivalInputChange,
        handleDepartureInputChange,
        searchDeparture,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};

export default FlightContext;
