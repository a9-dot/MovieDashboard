// src/components/__tests__/SearchBar.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SearchBar from '../SearchBar';
import rootReducer from '../../features/movieSlice'; // Adjust the import based on your structure

const renderWithRedux = (component, { initialState, store = createStore(rootReducer, initialState) } = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

test('renders search input and button', () => {
  renderWithRedux(<SearchBar />);
  expect(screen.getByPlaceholderText(/search movies/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
});

test('updates input value', () => {
  const { getByPlaceholderText } = renderWithRedux(<SearchBar />);
  const input = getByPlaceholderText(/search movies/i);
  fireEvent.change(input, { target: { value: 'Inception' } });
  expect(input.value).toBe('Inception');
});