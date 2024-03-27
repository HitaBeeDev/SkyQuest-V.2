function FlightSearchDetails() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <p>Adult</p>

          <div className="flex flex-row justify-between gap-3">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <p>Child</p>

          <div className="flex flex-row justify-between gap-3">
            <button>-</button>
            <p>0</p>
            <button>+</button>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <p>Infant</p>

          <div className="flex flex-row justify-between gap-3">
            <button>-</button>
            <p>0</p>
            <button>+</button>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <button>ECONOMY</button>
          <button>BUSSINESS</button>
        </div>
      </div>
    </div>
  );
}

export default FlightSearchDetails;
