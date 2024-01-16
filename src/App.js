import React, { useState } from 'react';
import SearchBar from './SearchBar';
import mockData from './mock_data.json';
import './App.css';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const handleOptionSelect = (selectedOption) => {
    setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, selectedOption]);
    setSearchValue('');
  };
  const handleOptionRemove = (removedOption) => {
    console.log('Removing option:', removedOption);
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.filter((option) => option !== removedOption)
    );
  };

  return (
    <div className="app-container">
      <h1>Search name form a thousand options</h1>
      <SearchBar
        value={searchValue}
        onChange={handleSearchChange}
        options={mockData}
        onSelect={handleOptionSelect}
        selectedOptions={selectedOptions}
        searchValue={searchValue}
        onRemove={handleOptionRemove}
      />
    </div>
  );
};

export default App;
