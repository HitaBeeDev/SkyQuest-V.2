import SearchInputs from "./SearchInputs";

function HomePageFlightSearchSection() {
  return (
    <div>
      <div className="flex flex-row bg-red-200">
        <SearchInputs placeholder="Put your Departure City" />
        <SearchInputs placeholder="Put your Arrival City" />
      </div>
    </div>
  );
}

export default HomePageFlightSearchSection;
