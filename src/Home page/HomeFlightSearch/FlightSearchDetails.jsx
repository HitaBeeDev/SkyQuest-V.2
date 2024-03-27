import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cabinClasses, passengerTypes } from "./passengerCabinTypes";
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

function FlightSearchDetails() {
  return (
    <div className="flex flex-col gap-5 w-full">
      {passengerTypes.map((type, index) => (
        <div key={index} className="flex flex-row justify-between">
          <p className="flex flex-col">
            {type.label} <span>{type.span}</span>
          </p>
          <div className="flex flex-row items-center justify-between gap-3">
            <button>
              <FontAwesomeIcon icon={faSquareMinus} />
            </button>

            <p>{type.count}</p>

            <button>
              <FontAwesomeIcon icon={faSquarePlus} />
            </button>
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
