import ResultSection from "../ResultSection/ResultSection";
import ArrivalSearchInput from "../SearchInputs/ArrivalSearchInputs";
import DepartureSearchInput from "../SearchInputs/DepartureSearchInputs";
import { useFlights } from "../../ContextAPI/FlightContext";
import DepartureDateInput from "../DateInputs/DepartureDateInput";
import ArrivalDateInput from "../DateInputs/ArrivalDateInput";

function HomePageFlightSearchSection() {
  const {
    setSelectedDeparture,
    setSelectedArrival,
    searchedFlights,
    handleSearch,
    searched,
  } = useFlights();

  return (
    <div>
      <div className="flex flex-row">
        <DepartureSearchInput setSelectedDeparture={setSelectedDeparture} />
        <ArrivalSearchInput setSelectedArrival={setSelectedArrival} />
      </div>

      <div className="flex flex-row">
        <DepartureDateInput />
        <ArrivalDateInput />
      </div>

      <button onClick={handleSearch}>Search</button>

      {searched && <ResultSection flights={searchedFlights} />}
    </div>
  );
}

export default HomePageFlightSearchSection;
