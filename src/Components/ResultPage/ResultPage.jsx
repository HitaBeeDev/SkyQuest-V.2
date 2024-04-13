function ResultPage({ searchData }) {
  if (!searchData) return null;

  const {
    departure,
    arrival,
    departureDate,
    arrivalDate,
    passengerCounts,
    cabinClass,
  } = searchData;

  return (
    <div className="bg-red-400">
      <p>DEPARTURE: {departure}</p>
      <p>ARRIVAL: {arrival}</p>
      <p>DEPARTURE DATE: {departureDate}</p>
      <p>ARRIVAL DATE: {arrivalDate}</p>
      <p>PASSENGER TYPE COUNTS: {JSON.stringify(passengerCounts)}</p>
      <p>PASSENGER CLASS: {cabinClass}</p>
    </div>
  );
}

export default ResultPage;
