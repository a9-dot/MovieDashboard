// src/components/MovieList.js
import React from 'react';
import { useQuery } from 'react-query';
import { fetchMovies } from '../api/movies'; // Ensure this path is correct
import MovieCard from './MovieCard';
import { Message } from '../styles/StyledComponents';

const MovieList = ({ searchTerm }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['movies', searchTerm],
    queryFn: () => fetchMovies(searchTerm),
    enabled: true, // Always run the query
  });

  if (isLoading) {
    return <Message>Loading...</Message>; // Display loading state
  }

  if (error) {
    return <Message>Error: {error.message}</Message>; // Display error message
  }

  return (
    <div>
      {data && data.length > 0 ? (
        data.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))
      ) : (
        <Message>No movies found.</Message>
      )}
    </div>
  );
};

export default MovieList;