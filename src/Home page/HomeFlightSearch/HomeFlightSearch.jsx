function HomeFlightSearch() {
  return (
    <form>
      <div>
        <label htmlFor="from">From</label>
        <input id="from" type="text" placeholder="Enter departure location" />

        <button type="button">Reverse</button>

        <label htmlFor="to">To</label>
        <input id="to" type="text" placeholder="Enter destination location" />
      </div>

      <div>
        <label htmlFor="departureTime">Departure Time</label>
        <input id="departureTime" type="datetime-local" />

        <div>
          <label htmlFor="arrivalTime">Arrival Time</label>
          <input id="arrivalTime" type="datetime-local" />

          <button>one-way</button>
        </div>
      </div>

      <div>
        <div>
          <label htmlFor="direct">Direct Flight</label>
          <input id="direct" type="checkbox" />

          <div>modal</div>
        </div>

        <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default HomeFlightSearch;
