import { useState } from "react";

function FlightSearchDatePicker({ label, handleChange }) {
  const [departureDate, setDepartureDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex flex-row items-center gap-3">
      <label htmlFor="departureTime">{label}</label>
      <input
        id="departureTime"
        type="date"
        value={departureDate}
        onChange={handleChange}
        min={today}
      />
    </div>
  );
}

export default FlightSearchDatePicker;
