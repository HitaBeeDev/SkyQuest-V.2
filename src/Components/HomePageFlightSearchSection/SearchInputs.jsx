import { useFlights } from "../../ContextAPI/FlightContext";

function SearchInputs({ placeholder }) {
  const {
    searchDeparture,
    filteredDepartureCities,
    handleDepartureInputChange,
    handleDepartureInputFocus,
    handleDepartureCitySelect,
  } = useFlights();

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={searchDeparture}
        onChange={handleDepartureInputChange}
        onFocus={handleDepartureInputFocus}
      />
      <ul>
        {filteredDepartureCities.map((city) => (
          <li
            key={city.name}
            onClick={() => handleDepartureCitySelect(city.name)}
          >
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchInputs;
