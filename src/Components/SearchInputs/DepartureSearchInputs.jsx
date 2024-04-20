import { useFlights } from "../../ContextAPI/FlightContext";

function DepartureSearchInput() {
  const {
    searchDeparture,
    filteredDepartureCities,
    handleDepartureInputFocus,
    handleDepartureCitySelect,
    handleDepartureInputChange,
  } = useFlights();

  return (
    <div>
      <input
        type="text"
        placeholder="Put your Departure City"
        value={searchDeparture}
        onChange={handleDepartureInputChange}
        onFocus={() => {
          handleDepartureInputFocus();
        }}
      />

      <ul>
        {filteredDepartureCities.map((city) => (
          <li
            key={city.name}
            onClick={() => {
              handleDepartureCitySelect(city.name);
            }}
          >
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DepartureSearchInput;
