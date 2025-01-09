// src/components/__tests__/MovieList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MovieList from '../MovieList';
import rootReducer from '../../features/movieSlice'; // Adjust the import based on your structure
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const renderWithRedux = (component, { initialState, store = createStore(rootReducer, initialState) } = {}) => {
  return {
    ...render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {component}
        </QueryClientProvider>
      </Provider>
    ),
    store,
  };
};

test('renders loading state', () => {
  renderWithRedux(<MovieList />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test('renders no movies found message', () => {
  const initialState = { movie: { searchQuery: 'nonexistent', selectedMovie: null } };
  renderWithRedux(<MovieList />, { initialState });
  expect(screen.getByText(/no movies found for/i)).toBeInTheDocument();
});

// Add more tests for successful movie rendering, error handling, etc.