import { useFlights } from "../../ContextAPI/FlightContext";

function ReturnDateInput() {
  const { switchOn, handleReturnDateChange, returnDate, departureDate } =
    useFlights();

  return (
    <div>
      <label>Return Date:</label>
      <input
        type="date"
        placeholder="From"
        value={returnDate}
        onChange={handleReturnDateChange}
        min={departureDate}
        disabled={!switchOn}
      />
    </div>
  );
}

export default ReturnDateInput;
