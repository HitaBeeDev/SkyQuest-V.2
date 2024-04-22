import { useFlights } from "../../ContextAPI/FlightContext";

function DepartureDateInput() {
  const { handleDepartureDateChange, departureDate } = useFlights();

  return (
    <div className="flex flex-row justify-between">
      <label className="text-sm font-normal">Departure Date:</label>
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
