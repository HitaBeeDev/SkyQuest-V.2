import HomePageFlightSearchSection from "./HomePageFlightSearchSection/HomePageFlightSearchSection";
import HomePageSliderSection from "./HomePageSliderSection/HomePageSliderSection";

function Container() {
  return (
    <div className="grid grid-cols-2 h-screen gap-5">
      <div className="col-span-1">
        <HomePageFlightSearchSection />
      </div>

      <div className="col-span-1">
        <HomePageSliderSection />
      </div>
    </div>
  );
}

export default Container;
