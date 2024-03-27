// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
// <FontAwesomeIcon icon={faArrowRightArrowLeft} />

import { cabinClasses, passengerTypes } from "./passengerCabinTypes";

function FlightSearchDetails() {
  return (
    <div className="flex flex-col gap-5 w-full">
      {passengerTypes.map((type, index) => (
        <div key={index} className="flex flex-row justify-between">
          <p className="flex flex-col">
            {type.label} <span>{type.span}</span>
          </p>
          <div className="flex flex-row justify-between gap-3">
            <button>-</button>
            <p>{type.count}</p>
            <button>+</button>
          </div>
        </div>
      ))}

      <div className="flex flex-row justify-between">
        {cabinClasses.map((cabin, index) => (
          <button key={index}>{cabin}</button>
        ))}
      </div>
    </div>
  );
}

export default FlightSearchDetails;
