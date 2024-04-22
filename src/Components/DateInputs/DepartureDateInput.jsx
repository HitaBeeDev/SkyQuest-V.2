import { useFlights } from "../../ContextAPI/FlightContext";

function DepartureDateInput() {
  const { handleDepartureDateChange, departureDate } = useFlights();

  return (
    <div className="flex flex-row justify-between">
      <div className="w-1/2 flex flex-row justify-start items-center gap-2">
        <FontAwesomeIcon icon={faPlaneDeparture} className="text-xs" />
        <label className="text-sm font-normal">Departure Date:</label>
      </div>

      <input
        type="date"
        placeholder="From"
        value={departureDate}
        onChange={handleDepartureDateChange}
      />
    </div>
  );
}

export default DepartureDateInput;
