import { useFlights } from "../../ContextAPI/FlightContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

function DepartureSearchInput() {
  const {
    searchDepartureCity,
    filteredDepartureCities,
    handleDepartureInputFocus,
    handleDepartureCitySelect,
    handleDepartureInputChange,
    departureListisOpen,
    setDepartureListIsOpen,
    departureListRef,
  } = useFlights();

  return (
    <div className="flex flex-col relative">
      <div className="flex flex-row justify-between items-center">
        <div className="w-1/2 flex flex-row justify-start items-center gap-2">
          <FontAwesomeIcon icon={faPlaneDeparture} className="text-xs" />
          <label className="text-sm font-normal">Your Departure Point:</label>
        </div>

        <input
          className="h-9 text-xs font-semibold pl-4 rounded-md w-1/2"
          type="text"
          placeholder="From"
          value={searchDepartureCity}
          onChange={handleDepartureInputChange}
          onFocus={() => {
            handleDepartureInputFocus();
            setDepartureListIsOpen(true);
          }}
        />
      </div>

      <div className="flex flex-row justify-end mt-2">
        {departureListisOpen && (
          <ul
            ref={departureListRef}
            className="absolute w-1/2 bg-color2 rounded-md z-10"
          >
            {filteredDepartureCities.map((city) => (
              <li
                className="text-[0.8rem] cursor-pointer mb-2 hover:bg-color4 h-7 flex items-center p-2 rounded-md"
                key={city.name}
                onClick={() => {
                  handleDepartureCitySelect(city.name);
                  setDepartureListIsOpen(false);
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

export default DepartureSearchInput;
