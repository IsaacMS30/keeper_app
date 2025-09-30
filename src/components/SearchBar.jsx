import React from "react";
import '../styles/SearchBar.css'

function SearchBar() {
  return (
    <input
        className="search-bar"
        type="search"
        name="search"
        placeholder="Search title and content"
    />
  );
}

export default SearchBar;
