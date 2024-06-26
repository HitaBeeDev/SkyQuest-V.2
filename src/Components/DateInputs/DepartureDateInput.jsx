import { useFlights } from "../../ContextAPI/FlightContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function DepartureDateInput() {
  const { handleDepartureDateChange, departureDate } = useFlights();

  return (
    <div className="flex flex-row justify-between">
      <div className="w-1/2 flex flex-row justify-start items-center gap-2">
        <FontAwesomeIcon icon={faCalendar} className="text-xs" />
        <label className="text-sm font-normal">Departure Date:</label>
      </div>

      <input
        className="h-9 text-xs p-4 rounded-md w-1/2"
        type="date"
        value={departureDate}
        onChange={handleDepartureDateChange}
      />
    </div>
  );
}

export default DepartureDateInput;
