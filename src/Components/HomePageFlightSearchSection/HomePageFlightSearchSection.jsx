import ResultSection from "../ResultSection/ResultSection";
import ArrivalSearchInput from "../SearchInputs/ArrivalSearchInputs";
import DepartureSearchInput from "../SearchInputs/DepartureSearchInputs";
import { useFlights } from "../../ContextAPI/FlightContext";
import DepartureDateInput from "../DateInputs/DepartureDateInput";
import ReturnDateInput from "../DateInputs/ReturnDateInput";
import SwitchComponent from "../DateInputs/SwitchComponent";
import PassengerDetails from "../PassengerDetails/PassengerDetails";

function HomePageFlightSearchSection() {
  const {
    setSelectedDepartureCity,
    setSelectedArrivalCity,
    searchedFlights,
    handleSearch,
    searched,
    departureDate,
    returnDate,
  } = useFlights();

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="bg-color6 bg-opacity-50 backdrop-blur-lg backdrop-filter rounded-md
       shadow-lg flex flex-col items-center p-5 m-20 w-full"
      >
        <div className="flex flex-col w-full">
          <DepartureSearchInput
            setSelectedDeparture={setSelectedDepartureCity}
          />
          <ArrivalSearchInput setSelectedArrival={setSelectedArrivalCity} />
        </div>

        <div className="flex flex-col w-full">
          <DepartureDateInput />
          <ReturnDateInput />
        </div>

        <SwitchComponent />

        <PassengerDetails />

        <button
          className="bg-red-200 w-full py-2 rounded-lg my-2"
          onClick={handleSearch}
        >
          Search
        </button>

        {searched && (
          <ResultSection
            flights={searchedFlights}
            departureDate={departureDate}
            returnDate={returnDate}
          />
        )}
      </div>
    </div>
  );
}

export default HomePageFlightSearchSection;
