import { useFlights } from "../../ContextAPI/FlightContext";

function ArrivalSearchInput() {
  const {
    searchArrival,
    filteredArrivalCities,
    handleArrivalInputFocus,
    handleArrivalCitySelect,
    handleArrivalInputChange,
  } = useFlights();

  return (
    <div>
      <input
        type="text"
        placeholder="Put your Arrival City"
        value={searchArrival}
        onChange={handleArrivalInputChange}
        onFocus={() => {
          handleArrivalInputFocus();
        }}
      />

      <ul>
        {filteredArrivalCities.map((city) => (
          <li
            key={city.name}
            onClick={() => {
              handleArrivalCitySelect(city.name);
            }}
          >
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrivalSearchInput;
