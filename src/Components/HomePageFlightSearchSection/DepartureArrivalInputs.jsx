import { useEffect } from "react";
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

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setOpen(true)}
      />
      {loading && (
        <div>
          <div></div>
        </div>
      )}
      {open && (
        <div>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setInputValue(option.title);
                setOpen(false);
              }}
            >
              {option.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DepartureArrivalInputs;
