import { useState } from "react";
import HomeCarouselSlider from "./HomeCarouselSlider";
import HomeFlightSearch from "./HomeFlightSearch/HomeFlightSearch";
import ResultPage from "./ResultPage/ResultPage";

function Container() {
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [searchData, setSearchData] = useState(null);

  const handleSearch = (data) => {
    setSearchInitiated(true);
    setSearchData(data);
  };

  return (
    <div>
      {!searchInitiated && (
        <div className="grid grid-cols-12">
          <div className="col-span-7">
            <HomeFlightSearch onSearch={handleSearch} />
          </div>

          <div className="col-span-5">
            <HomeCarouselSlider />
          </div>
        </div>
      )}
      {searchInitiated && <ResultPage searchData={searchData} />}
    </div>
  );
}

export default Container;
