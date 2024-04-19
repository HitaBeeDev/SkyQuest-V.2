import { useState } from "react";

function DepartureArrivalInputs() {
  const cities = [
    { name: "New York City" },
    { name: "Tokyo" },
    { name: "London" },
    { name: "Paris" },
    { name: "Sydney" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filteredCities = cities.filter((city) =>
      city.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCities(filteredCities);
  };

  const handleInputFocus = () => {
    setFilteredCities(cities);
  };

  const handleCitySelect = (cityName) => {
    setSearchTerm(cityName);
    setFilteredCities([]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search cities..."
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      <ul>
        {filteredCities.map((city, index) => (
          <li key={index} onClick={() => handleCitySelect(city.name)}>
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DepartureArrivalInputs;
