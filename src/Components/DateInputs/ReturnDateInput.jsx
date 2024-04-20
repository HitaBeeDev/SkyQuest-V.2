import { useFlights } from "../../ContextAPI/FlightContext";

function ReturnDateInput() {
  const { switchOn, handleReturnDateChange, returnDate, currentDate } =
    useFlights();

  return (
    <div>
      <label>Return Date:</label>
      <input
        type="date"
        placeholder="From"
        value={returnDate}
        onChange={handleReturnDateChange}
        disabled={!switchOn}
        min={currentDate}
      />
    </div>
  );
}

export default ReturnDateInput;
