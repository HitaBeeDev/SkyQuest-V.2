import { useState } from "react";

function FlightSearchDatePicker({ label, handleChange, isSelectable }) {
  const [date, setDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (event) => {
    setDate(event.target.value);
    handleChange(event.target.value);
  };

  return (
    <div className="bg-red-100 flex flex-row items-center gap-3">
      <label htmlFor="departureTime">{label}</label>
      <input
        className="bg-red-300"
        id="departureTime"
        type="date"
        value={date}
        onChange={handleDateChange}
        min={today}
        disabled={!isSelectable}
      />
    </div>
  );
}

export default FlightSearchDatePicker;
