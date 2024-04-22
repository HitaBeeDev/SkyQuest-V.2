import { useFlights } from "../../ContextAPI/FlightContext";

function DepartureDateInput() {
  const { handleDepartureDateChange, departureDate } = useFlights();

  return (
    <div>
      <label>Departure Date:</label>
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
