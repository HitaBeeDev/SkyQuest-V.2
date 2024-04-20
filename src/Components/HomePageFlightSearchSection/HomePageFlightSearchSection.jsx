import ResultSection from "../ResultSection/ResultSection";
import ArrivalSearchInput from "../SearchInputs/ArrivalSearchInputs";
import DepartureSearchInput from "../SearchInputs/DepartureSearchInputs";
import { useFlights } from "../../ContextAPI/FlightContext";
import DepartureDateInput from "../DateInputs/DepartureDateInput";
import ReturnDateInput from "../DateInputs/ReturnDateInput";
import SwitchComponent from "../DateInputs/SwitchComponent";

function HomePageFlightSearchSection() {
  const {
    setSelectedDepartureCity,
    setSelectedArrivalCity,
    searchedFlights,
    handleSearch,
    searched,
  } = useFlights();

  return (
    <div>
      <div className="flex flex-row">
        <DepartureSearchInput setSelectedDeparture={setSelectedDepartureCity} />
        <ArrivalSearchInput setSelectedArrival={setSelectedArrivalCity} />
      </div>

      <div>
        <div className="flex flex-row">
          <DepartureDateInput />
          <ReturnDateInput />
        </div>

        <SwitchComponent />
      </div>

      <button onClick={handleSearch}>Search</button>

      {searched && <ResultSection flights={searchedFlights} />}
    </div>
  );
}

export default HomePageFlightSearchSection;
