// src/features/movieSlice.js
import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    selectedMovie: null,
    searchQuery: '',
    sortOrder: 'asc', // or 'desc'
    filterSettings: {},
  },
  reducers: {
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setFilterSettings: (state, action) => {
      state.filterSettings = action.payload;
    },
  },
});

export const {
  setSelectedMovie,
  setSearchQuery,
  setSortOrder,
  setFilterSettings,
} = movieSlice.actions;

export default movieSlice.reducer;