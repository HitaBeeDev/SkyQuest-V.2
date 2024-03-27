import { useState } from "react";
import FlightSearchDatePicker from "./FlightSearchDatePicker";
import FlightSearchInput from "./FlightSearchInput";
import Switch from "@mui/material/Switch";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
// <FontAwesomeIcon icon={faArrowRightArrowLeft} />

const label = { inputProps: { "aria-label": "Size switch demo" } };

function HomeFlightSearch() {
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");

  const handleDepartureDateChange = (e) => {
    const selectedDate = e.target.value;
    setDepartureDate(selectedDate);
  };

  const handleReturnDateChange = (e) => {
    const selectedDate = e.target.value;
    setArrivalDate(selectedDate);
  };

  return (
    <form className="flex flex-col justify-between h-full p-32">
      <div className="flex flex-row items-center justify-between">
        <FlightSearchInput
          optionField="departure"
          label="Enter departure location"
        />

        <FlightSearchInput
          optionField="arrival"
          label="Enter destination location"
        />
      </div>

      <div className="flex flex-row justify-between items-start">
        <FlightSearchDatePicker
          label="Departure Date"
          handleChange={handleDepartureDateChange}
        />

        <div className="flex flex-col items-end gap-3">
          <FlightSearchDatePicker
            label="Arrival Date"
            handleChange={handleReturnDateChange}
          />

          <div className="flex flex-row">
            <Switch
              className="text-right"
              {...label}
              defaultChecked
              size="small"
            />
            <p>Round Trip</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="flex flex-row gap-5">
            <label htmlFor="direct">Direct Flight</label>
            <input id="direct" type="checkbox" />
          </div>

          <div>modal</div>
        </div>

        <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default HomeFlightSearch;
