import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

function HomeFlightSearch() {
  return (
    <form className="flex flex-col justify-between h-full p-32">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <label htmlFor="from">From</label>
          <input id="from" type="text" placeholder="Enter departure location" />
        </div>

        <button type="button">
          <FontAwesomeIcon icon={faArrowRightArrowLeft} />
        </button>

        <div className="flex flex-col">
          <label htmlFor="to">To</label>
          <input id="to" type="text" placeholder="Enter destination location" />
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <label htmlFor="departureTime">Departure Time</label>
          <input id="departureTime" type="datetime-local" />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="arrivalTime">Arrival Time</label>
            <input id="arrivalTime" type="datetime-local" />
          </div>

          <button>one-way</button>
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
