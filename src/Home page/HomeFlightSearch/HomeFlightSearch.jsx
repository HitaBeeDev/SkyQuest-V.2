import FlightSearchDatePicker from "./FlightSearchDatePicker";
import FlightSearchInput from "./FlightSearchInput";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
// <FontAwesomeIcon icon={faArrowRightArrowLeft} />

function HomeFlightSearch() {
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

      <FlightSearchDatePicker label="Departure Date" />

      <FlightSearchDatePicker label="Arrival Date" />

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
