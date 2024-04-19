import { useFlights } from "../../ContextAPI/FlightContext";

function SearchInputs() {
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
        placeholder="Search cities..."
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
