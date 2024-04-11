import { useState } from "react";
import FlightSearchDatePicker from "./FlightSearchDatePicker";
import FlightSearchInput from "./FlightSearchInput";
import Switch from "@mui/material/Switch";
import FlightSearchDetails from "./FlightSearchDetails";
import ResultPage from "../ResultPage/ResultPage";

const label = { inputProps: { "aria-label": "Size switch demo" } };

function HomeFlightSearch() {
  const [returnDateEnabled, setReturnDateEnabled] = useState(true);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleDepartureDateChange = (value) => {
    setDepartureDate(value);
  };

  const handleReturnDateChange = (value) => {
    setReturnDate(value);
  };

  return (
    <form className="flex flex-col justify-between h-full p-10">
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
          isSelectable={true}
        />

        <div className="flex flex-col items-end gap-3">
          {returnDateEnabled && (
            <FlightSearchDatePicker
              label="Arrival Date"
              handleChange={handleReturnDateChange}
              isSelectable={true}
            />
          )}
          {!returnDateEnabled && (
            <FlightSearchDatePicker
              label="Arrival Date"
              handleChange={handleReturnDateChange}
              isSelectable={false}
            />
          )}

          <div className="flex flex-row">
            <Switch
              className="text-right"
              defaultChecked={returnDateEnabled}
              size="small"
              onChange={() => setReturnDateEnabled(!returnDateEnabled)}
            />

            <p>Round Trip</p>
          </div>
        </div>
      </div>

      <FlightSearchDetails />

      <button className="text-right" type="submit">
        Search
      </button>

      <ResultPage />
    </form>
  );
}

export default HomeFlightSearch;