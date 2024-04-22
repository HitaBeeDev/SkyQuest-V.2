import { useFlights } from "../../ContextAPI/FlightContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneArrival } from "@fortawesome/free-solid-svg-icons";

function ArrivalSearchInput() {
  const {
    searchArrivalCity,
    filteredArrivalCities,
    handleArrivalInputFocus,
    handleArrivalCitySelect,
    handleArrivalInputChange,
    arrivalListisOpen,
    setArrivalListIsOpen,
    arrivalListRef,
  } = useFlights();

  return (
    <div className="flex flex-col relative">
      <div className="flex flex-row justify-between items-center">
        <div className="w-1/2 flex flex-row justify-start items-center gap-2">
          <FontAwesomeIcon icon={faPlaneArrival} className="text-xs" />
          <label className="text-sm font-normal">
            Your Departure Point: Destination
          </label>
        </div>

        <input
          className="h-9 text-xs font-semibold pl-4 rounded-md w-1/2"
          type="text"
          placeholder="To"
          value={searchArrivalCity}
          onChange={handleArrivalInputChange}
          onFocus={() => {
            handleArrivalInputFocus();
            setArrivalListIsOpen(true);
          }}
        />
      </div>

      <div className="flex flex-row justify-end mt-2">
        {arrivalListisOpen && (
          <ul
            className="absolute w-1/2 bg-color2 rounded-md"
            ref={arrivalListRef}
          >
            {filteredArrivalCities.map((city) => (
              <li
                className="text-[0.8rem] cursor-pointer mb-2 hover:bg-color4 h-7 flex items-center p-2 rounded-md"
                key={city.name}
                onClick={() => {
                  handleArrivalCitySelect(city.name);
                  setArrivalListIsOpen(false);
                }}
              >
                {city.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ArrivalSearchInput;
