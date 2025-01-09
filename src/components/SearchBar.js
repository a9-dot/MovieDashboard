// src/components/SearchBox.js
import React from 'react';

const SearchBox = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search for movies..."
      style={{ marginBottom: '20px', padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
    />
  );
};

export default SearchBox;










// // src/components/SearchBar.js
// import React, { useState } from 'react';
// import { Button } from '../styles/StyledComponents';

// const SearchBar = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearch = () => {
//     onSearch(searchTerm);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search movies..."
//         value={searchTerm}
//         onChange={handleInputChange}
//       />
//       <Button onClick={handleSearch}>Search</Button>
//     </div>
//   );
// };

// export default SearchBar;