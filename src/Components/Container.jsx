import HomeCarouselSlider from "./HomeCarouselSlider";
import HomeFlightSearch from "./HomeFlightSearch/HomeFlightSearch";
import ResultPage from "./ResultPage/ResultPage";

function Container() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <HomeFlightSearch />
        </div>

        <div className="col-span-5">
          <HomeCarouselSlider />
        </div>
      </div>

      <div>
        <ResultPage />
      </div>
    </div>
  );
}

export default Container;
