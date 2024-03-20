import React, { useState } from "react";
import SearchBarCSS from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className={SearchBarCSS.search_container}>
      <input
        type="text"
        id="email"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
        className={SearchBarCSS.search_input}
      />
      <button type="submit" className={SearchBarCSS.search_button}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
