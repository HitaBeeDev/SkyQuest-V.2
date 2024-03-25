import HomeCarouselSlider from "./HomeCarouselSlider";
import HomeFlightSearch from "./HomeFlightSearch/HomeFlightSearch";

function HomePage() {
  return (
    <div className="grid grid-cols-12">
      <div className="bg-red-100 col-span-6">
        <HomeFlightSearch />
      </div>

      <div className="bg-red-200 col-span-6">
        <HomeCarouselSlider />
      </div>
    </div>
  );
}

export default HomePage;
