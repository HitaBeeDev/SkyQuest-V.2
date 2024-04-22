import { useFlights } from "../../ContextAPI/FlightContext";
import passengerTypes from "../../Data/passengerTypes";

function PassengerDetails() {
  const { counts, handleCountChange, handleClassChange } = useFlights();

  return (
    <div>
      {passengerTypes.map((passenger) => (
        <div key={passenger.type} className="flex flex-row gap-10">
          <div className="flex flex-col">
            <p>{passenger.label}</p>
            <p>+18</p>
          </div>

          <div className="flex flex-row items-center gap-5">
            <button
              onClick={() => handleCountChange(passenger.type, "decrease")}
              disabled={counts[passenger.type] === passenger.minCount}
            >
              -
            </button>
            <p>{counts[passenger.type]}</p>
            <button
              onClick={() => handleCountChange(passenger.type, "increase")}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className="flex flex-row gap-10 bg-slate-200">
        <button onClick={() => handleClassChange("economy")}>ECONOMY</button>
        <button onClick={() => handleClassChange("business")}>BUSINESS</button>
        <button onClick={() => handleClassChange("firstClass")}>
          FIRST CLASS
        </button>
      </div>
    </div>
  );
}

export default PassengerDetails;
