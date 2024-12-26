import './TodoSearch.css';
import React from 'react'

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
  return (
    <input 
    placeholder="Cut onion" 
    className="TodoSearch"
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
    }}
    />
  );
}

export {TodoSearch};
