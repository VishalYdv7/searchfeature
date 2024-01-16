// SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ value, onChange, options, onSelect, selectedOptions, searchValue, onRemove }) => {
  const filteredOptions = options
    .filter(
      (option) =>
        !selectedOptions.includes(option) &&
        (option.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
          option.last_name.toLowerCase().includes(searchValue.toLowerCase()))
    )
    .slice(0, 10);
    const highlightMatch = (text, match) => {
        const parts = text.split(new RegExp(`(${match})`, 'gi'));
        return (
          <span>
            {parts.map((part, index) => (
              <span key={index} className={part.toLowerCase() === match.toLowerCase() ? 'highlight' : ''}>
                {part}
              </span>
            ))}
          </span>
        );
      };
  return (
    <div className="search-bar">
      <div className="input-container">
        {selectedOptions.map((option) => (
            <div key={option.id} className="chip">
              <img src={option.image} alt={`${option.first_name[0]} ${option.last_name[0]}`} className="avatar" />
              {option.first_name} {option.last_name}
              <span className="remove-icon" onClick={() => onRemove(option)}>
                &#x2715;
              </span>
            </div>
          ))}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type here..."
        />
        {searchValue && (
            <ul className="options-list">
                {filteredOptions.map((option) => (
                <li key={option.id} className="option-item" onClick={() => onSelect(option)}>
                    <div className="avatar-container">
                    <img src={option.image} alt={`${option.first_name} ${option.last_name}`} className="avatar" />
                    </div>
                    <div className="info">
                        <div className="full-name">
                        {highlightMatch(`${option.first_name} ${option.last_name}`, searchValue)}
                        </div>
                        <div className="email">{option.email}</div>
                    </div>
                </li>
                ))}
            </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
