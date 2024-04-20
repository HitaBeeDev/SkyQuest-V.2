function ResultSection({ flights }) {
  return (
    <div className="bg-red-100">
      <div>
        <p>Flights:</p>
        {flights.length > 0 ? (
          flights.map((flight, index) => (
            <div key={index}>
              <p>{`${flight.departureCity} to ${flight.arrivalCity}`}</p>
              <p>DEPARTURE TIME: {flight.departureTime}</p>
              <p>ARRIVAL TIME: {flight.arrivalTime}</p>
            </div>
          ))
        ) : (
          <p>NO FLIGHT FOUND WITH THESE CITIES.</p>
        )}
      </div>
    </div>
  );
}

export default ResultSection;
