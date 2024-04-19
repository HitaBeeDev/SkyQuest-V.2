import { createContext, useContext, useState } from "react";

const FlightContext = createContext();

export const useFlights = () => useContext(FlightContext);

export const FlightProvider = ({ children }) => {
  const cities = [
    { name: "New York City" },
    { name: "Tokyo" },
    { name: "London" },
    { name: "Paris" },
    { name: "Sydney" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filteredCities = cities.filter((city) =>
      city.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCities(filteredCities);
  };

  const handleInputFocus = () => {
    setFilteredCities(cities);
  };

  const handleCitySelect = (cityName) => {
    setSearchTerm(cityName);
    setFilteredCities([]);
  };

  return (
    <FlightContext.Provider
      value={{
        searchTerm,
        filteredCities,
        handleInputChange,
        handleInputFocus,
        handleCitySelect,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};

export default FlightContext;
