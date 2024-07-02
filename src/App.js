import React, { useState } from 'react';
import './App.css';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import Search from './components/Search';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    setSearchResults([]); // Placeholder until actual fetching is implemented
  };

  return (
    <div className="App">
      <h1>Items Management</h1>
      <Search onSearch={handleSearch} />
      <ItemForm />
      <ItemList items={searchResults} />
    </div>
  );
}

export default App;
