import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Pass the search query to the parent component via props
    onSearch(searchQuery);
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>Explore</div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search items"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
