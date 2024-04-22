import { createContext, useContext, useEffect, useRef, useState } from "react";
import initialCities from "../Data/cities";
import flights from "../Data/flights";

const FlightContext = createContext();

export const useFlights = () => useContext(FlightContext);

export const FlightProvider = ({ children }) => {
  const [searchDepartureCity, setSearchDepartureCity] = useState("");
  const [searchArrivalCity, setSearchArrivalCity] = useState("");
  const [filteredDepartureCities, setFilteredDepartureCities] = useState([]);
  const [filteredArrivalCities, setFilteredArrivalCities] = useState([]);
  const [selectedDepartureCity, setSelectedDepartureCity] = useState("");
  const [selectedArrival, setSelectedArrival] = useState("");
  const [searchedFlights, setSearchedFlights] = useState([]);
  const [searched, setSearched] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);
  const [returnDate, setReturnDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [counts, setCounts] = useState({
    adult: 1,
    baby: 0,
    infant: 0,
  });
  const [selectedClass, setSelectedClass] = useState("economy");
  const [departureListisOpen, setDepartureListIsOpen] = useState(false);
  const [arrivalListisOpen, setArrivalListIsOpen] = useState(false);
  const arrivalListRef = useRef(null);
  const departureListRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        departureListRef.current &&
        !departureListRef.current.contains(event.target)
      ) {
        setDepartureListIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        arrivalListRef.current &&
        !arrivalListRef.current.contains(event.target)
      ) {
        setArrivalListIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClassChange = (classType) => {
    setSelectedClass(classType);
  };

  const calculateTotalPrice = (flight) => {
    let multiplier = 1;
    if (selectedClass === "business") {
      multiplier = 2;
    } else if (selectedClass === "firstClass") {
      multiplier = 5;
    }

    const adultPrice = counts.adult * flight.flightPrice * multiplier;
    const babyPrice = counts.baby * (flight.flightPrice / 2) * multiplier;
    const infantPrice = counts.infant * (flight.flightPrice / 3) * multiplier;
    const totalPrice = adultPrice + babyPrice + infantPrice;
    return Math.ceil(totalPrice);
  };

  const handleCountChange = (type, action) => {
    setCounts((prevCounts) => {
      const updatedCounts = { ...prevCounts };
      if (action === "increase") {
        updatedCounts[type] += 1;
      } else if (
        action === "decrease" &&
        updatedCounts[type] > (type === "adult" ? 1 : 0)
      ) {
        updatedCounts[type] -= 1;
      }
      return updatedCounts;
    });
  };

  const handleReturnDateChange = (e) => {
    const selectedReturnDate = e.target.value;
    if (!departureDate) {
      setReturnDate(selectedReturnDate);
    } else if (selectedReturnDate >= departureDate) {
      setReturnDate(selectedReturnDate);
    } else {
      alert("Return date cannot be before departure date.");
    }
  };

  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
  };

  const currentDate = new Date().toISOString().split("T")[0];

  const handleSwitchChange = (event) => {
    setSwitchOn(event.target.checked);
  };

  const handleSearch = () => {
    const filteredFlights = flights.filter(
      (flight) =>
        flight.departureCity.trim().toLowerCase() ===
          selectedDepartureCity.trim().toLowerCase() &&
        flight.arrivalCity.trim().toLowerCase() ===
          selectedArrival.trim().toLowerCase()
    );
    setSearchedFlights(filteredFlights);
    setSearched(true);
  };

  const handleDepartureInputChange = (event) => {
    const value = event.target.value;
    setSearchDepartureCity(value);
    const filteredCities = initialCities.filter((city) =>
      city.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDepartureCities(filteredCities);
  };

  const handleArrivalInputChange = (event) => {
    const value = event.target.value;
    searchArrivalCity(value);
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
    setSelectedDepartureCity(cityName);
    setSearchDepartureCity(cityName);
    setFilteredDepartureCities([]);
  };

  const handleArrivalCitySelect = (cityName) => {
    setSelectedArrival(cityName);
    setSearchArrivalCity(cityName);
    setFilteredArrivalCities([]);
  };

  return (
    <FlightContext.Provider
      value={{
        setSearchDepartureCity,
        setSearchArrivalCity,
        searchDepartureCity,
        searchArrivalCity,
        filteredDepartureCities,
        filteredArrivalCities,
        handleDepartureInputFocus,
        handleArrivalInputFocus,
        handleDepartureCitySelect,
        handleArrivalCitySelect,
        handleDepartureInputChange,
        handleArrivalInputChange,
        setSelectedDepartureCity,
        setSelectedArrival,
        searchedFlights,
        handleSearch,
        searched,
        switchOn,
        setSwitchOn,
        handleReturnDateChange,
        returnDate,
        handleSwitchChange,
        currentDate,
        handleDepartureDateChange,
        departureDate,
        counts,
        handleCountChange,
        calculateTotalPrice,
        setSelectedClass,
        handleClassChange,
        departureListisOpen,
        setDepartureListIsOpen,
        departureListRef,
        arrivalListisOpen,
        setArrivalListIsOpen,
        arrivalListRef,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};

export default FlightContext;
