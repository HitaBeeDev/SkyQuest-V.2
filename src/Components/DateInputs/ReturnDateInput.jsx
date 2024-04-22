import { useFlights } from "../../ContextAPI/FlightContext";

function ReturnDateInput() {
  const { switchOn, handleReturnDateChange, returnDate, departureDate } =
    useFlights();

  return (
    <div className="flex flex-row justify-between">
      <div className="w-1/2 flex flex-row justify-start items-center gap-2">
        <FontAwesomeIcon icon={faCalendar} className="text-xs" />
        <label className="text-sm font-normal">Departure Date:</label>
      </div>

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
