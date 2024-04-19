import { useState } from "react";

function DepartureArrivalInputs() {
  const topFilms = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
  ];

  // State variables
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Handler for input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setOpen(!!value); // Open dropdown if there's text input
  };

  // Handler for selecting an option
  const handleOptionSelect = (option) => {
    setInputValue(option.title);
    setOpen(false);
  };

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
