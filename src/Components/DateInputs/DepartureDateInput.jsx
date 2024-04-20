import { useFlights } from "../../ContextAPI/FlightContext";

function DepartureDateInput() {
  const { currentDate } = useFlights();

  return (
    <div>
      <label>Departure Date</label>
      <input type="date" placeholder="From" min={currentDate} />
    </div>
  );
}

export default DepartureDateInput;
