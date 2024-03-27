import { useState } from "react";

function FlightSearchDatePicker({ label }) {
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");

  const handleDepartureDateChange = (e) => {
    const selectedDate = e.target.value;
    setDepartureDate(selectedDate);
  };

  const handleArrivalDateChange = (e) => {
    const selectedDate = e.target.value;
    setArrivalDate(selectedDate);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-col">
        <label htmlFor="departureTime">{label}</label>
        <input
          id="departureTime"
          type="date"
          value={departureDate}
          onChange={handleDepartureDateChange}
          min={today}
        />
      </div>

      <button>one-way</button>
    </div>
  );
}

export default FlightSearchDatePicker;
