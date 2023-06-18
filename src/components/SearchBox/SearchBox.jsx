import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBox.css";

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("");
  const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "USA", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent: "Asia" },
  ];

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleButtonClick = () => {
    const searchBox = document.querySelector(".search-box");
    searchBox.classList.toggle("open");
    searchBox.querySelector(".search-box-input").focus();
  };

  const filteredCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <div>
      <div className="search-box">
        <input
          type="search"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
          className="search-box-input"
        />

        <button className="search-box-btn" onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Continent</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.map((country, index) => (
            <tr key={index}>
              <td>{country.name}</td>
              <td>{country.continent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBox;
