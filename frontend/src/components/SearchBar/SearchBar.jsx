import React, { useState } from "react";
import "./SearchBar.css";
const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
    if (e.key === "Enter") {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleInputChange}
      />
      <label className={`placeholder ${value && "active"}`}>
        Search for recipes
      </label>
    </div>
  );
};

export default SearchBar;
