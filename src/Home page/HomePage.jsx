import HomeCarouselSlider from "./HomeCarouselSlider";
import HomeFlightSearch from "./HomeFlightSearch/HomeFlightSearch";

function HomePage() {
  return (
    <div className="grid grid-cols-12 gap-5 h-screen">
      <div className="bg-red-100 col-span-6 m-5 rounded-md shadow-xl">
        <HomeFlightSearch />
      </div>

      <div className="bg-red-200 col-span-6 m-5 rounded-md shadow-xl">
        <HomeCarouselSlider />
      </div>
    </div>
  );
}

export default HomePage;
