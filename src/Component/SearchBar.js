import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; 


const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Search your Address, City"
      />
      <button className="search-button" type="submit">
        <i className="fas fa-search"></i> 
      </button>
    </form>
  );
};

export default SearchBar;
