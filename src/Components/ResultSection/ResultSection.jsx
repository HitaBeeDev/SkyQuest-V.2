import { useFlights } from "../../ContextAPI/FlightContext";

function ResultSection({ flights, departureDate, returnDate }) {
  const { calculateTotalPrice } = useFlights();

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

              <p>Selected departure Date: {departureDate}</p>

              <p>Selected return Date: {returnDate}</p>

              <p>Price: {calculateTotalPrice(flight)}</p>
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
