import { useState } from "react";
import PassengerCounter from "./PassengerCounter";
import { cabinClasses, passengerTypes } from "../../Data/passengerCabinTypes";

function FlightSearchDetails() {
  const [passengerCounts, setPassengerCounts] = useState([
    { ...passengerTypes[0], count: 1 },
    { ...passengerTypes[1], count: 0 },
    { ...passengerTypes[2], count: 0 },
    { ...passengerTypes[3], count: 0 },
  ]);

  const handleIncrease = (index) => {
    const updatedCounts = [...passengerCounts];
    updatedCounts[index].count += 1;
    setPassengerCounts(updatedCounts);
  };

  const handleDecrease = (index) => {
    const updatedCounts = [...passengerCounts];
    if (updatedCounts[index].count > 1) {
      updatedCounts[index].count -= 1;
      setPassengerCounts(updatedCounts);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col">
        {passengerCounts.map((passenger, index) => (
          <PassengerCounter
            key={passenger.label}
            type={passenger}
            count={passenger.count}
            onIncrease={() => handleIncrease(index)}
            onDecrease={() => handleDecrease(index)}
          />
        ))}

        <div className="flex flex-row justify-end gap-5">
          {cabinClasses.map((cabinClass) => (
            <button key={cabinClass}>{cabinClass}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlightSearchDetails;
