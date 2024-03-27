function FlightSearchDetails() {
  const passengerTypes = [
    { label: "Adult", span: "12 +", count: 1 },
    { label: "Child", span: "2 - 11", count: 0 },
    { label: "Infant", span: "Under 2 years old", count: 0 },
    { label: "Student", span: "12 - 34", count: 0 },
  ];

  const cabinClasses = ["ECONOMY", "BUSINESS"];

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col">
        {passengerTypes.map((type, index) => (
          <div key={index} className="flex flex-row justify-between">
            <p className="flex flex-col">
              {type.label} <span>{type.span}</span>
            </p>
            <div className="flex flex-row justify-between gap-3">
              <button>-</button>
              <p>{type.count}</p>
              <button>+</button>
            </div>
          </div>
        ))}
        <div className="flex flex-row justify-between">
          {cabinClasses.map((cabin, index) => (
            <button key={index}>{cabin}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlightSearchDetails;
