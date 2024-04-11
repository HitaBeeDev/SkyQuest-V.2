import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

function PassengerCounter({ type, count, onIncrease, onDecrease }) {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <p>{type.label}</p>

        <p>{type.span}</p>
      </div>

      <div className="flex flex-row justify-between gap-3">
        <button type="button" onClick={onDecrease}>
          <FontAwesomeIcon icon={faSquareMinus} />
        </button>
        <p>{count}</p>
        <button type="button" onClick={onIncrease}>
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
      </div>
    </div>
  );
}

export default PassengerCounter;
