// src/components/SortAndFilter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortOrder, setFilterSettings } from '../features/movieSlice';

const SortAndFilter = () => {
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    dispatch(setSortOrder(e.target.value)); // Dispatch the selected sort order
  };

  const handleFilterChange = (e) => {
    dispatch(setFilterSettings({ genre: e.target.value })); // Dispatch filter settings
  };

  return (
    <div className="sort-and-filter">
      <select onChange={handleSortChange}>
        <option value="asc">Sort by Title (A-Z)</option>
        <option value="desc">Sort by Title (Z-A)</option>
      </select>
      <input
        type="text"
        placeholder="Filter by genre..."
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default SortAndFilter;