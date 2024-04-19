import { useFlights } from "../../ContextAPI/FlightContext";

function SearchInputs({ placeholder }) {
  const {
    searchTerm,
    filteredCities,
    handleInputChange,
    handleInputFocus,
    handleCitySelect,
  } = useFlights();

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      <ul>
        {filteredCities.map((city) => (
          <li key={city.name} onClick={() => handleCitySelect(city.name)}>
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchInputs;
