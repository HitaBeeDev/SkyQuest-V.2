import HomeCarouselSlider from "./HomeCarouselSlider";
import HomeFlightSearch from "./HomeFlightSearch/HomeFlightSearch";

function HomePage() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-7">
        <HomeFlightSearch />
      </div>

      <div className="col-span-5">
        <HomeCarouselSlider />
      </div>
    </div>
  );
}

export default HomePage;
