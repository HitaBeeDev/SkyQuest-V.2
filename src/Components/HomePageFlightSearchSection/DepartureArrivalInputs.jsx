import { useState } from "react";

function DepartureArrivalInputs() {
  const cities = [
    { name: "New York City" },
    { name: "Tokyo" },
    { name: "London" },
    { name: "Paris" },
    { name: "Sydney" },
  ];

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={inputValue}
        onChange={handleInputChange}
      />

      {open && (
        <div>
          {options.map((option, index) => (
            <div key={index} onClick={() => handleOptionSelect(option)}>
              {option.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DepartureArrivalInputs;
