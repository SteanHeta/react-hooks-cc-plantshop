// src/components/Search.js
import React from 'react';

function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="search">
      <h2>Search Plants:</h2>
      <input
        type="text"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;