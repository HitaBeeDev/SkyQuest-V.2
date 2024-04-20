import { createContext, useContext, useState } from "react";
import initialCities from "../Data/cities";
import flights from "../Data/flights";

const FlightContext = createContext();

export const useFlights = () => useContext(FlightContext);

export const FlightProvider = ({ children }) => {
  const [searchDeparture, setSearchDeparture] = useState("");
  const [searchArrival, setSearchArrival] = useState("");
  const [filteredDepartureCities, setFilteredDepartureCities] = useState([]);
  const [filteredArrivalCities, setFilteredArrivalCities] = useState([]);
  const [selectedDeparture, setSelectedDeparture] = useState("");
  const [selectedArrival, setSelectedArrival] = useState("");
  const [searchedFlights, setSearchedFlights] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const filteredFlights = flights.filter(
      (flight) =>
        flight.departureCity.trim().toLowerCase() ===
          selectedDeparture.trim().toLowerCase() &&
        flight.arrivalCity.trim().toLowerCase() ===
          selectedArrival.trim().toLowerCase()
    );
    setSearchedFlights(filteredFlights);
    setSearched(true);
  };

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
    setSelectedDeparture(cityName);
    setSearchDeparture(cityName);
    setFilteredDepartureCities([]);
  };

  const handleArrivalCitySelect = (cityName) => {
    setSelectedArrival(cityName);
    setSearchArrival(cityName);
    setFilteredArrivalCities([]);
  };

  return (
    <FlightContext.Provider
      value={{
        setSearchDeparture,
        setSearchArrival,
        searchDeparture,
        searchArrival,
        filteredDepartureCities,
        filteredArrivalCities,
        handleDepartureInputFocus,
        handleArrivalInputFocus,
        handleDepartureCitySelect,
        handleArrivalCitySelect,
        handleDepartureInputChange,
        handleArrivalInputChange,
        setSelectedDeparture,
        setSelectedArrival,
        searchedFlights,
        handleSearch,
        searched,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};

export default FlightContext;
