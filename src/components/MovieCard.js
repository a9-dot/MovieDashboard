// src/components/MovieCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { MovieCardContainer, MovieCardImage, MovieCardTitle } from '../styles/StyledComponents';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    navigate(`/movies/${movie.imdbID}`); // Navigate to movie details page
  };

  return (
    <MovieCardContainer onClick={handleClick}>
      <MovieCardImage src={movie.Poster !== 'N/A' ? movie.Poster : 'path/to/default/image.jpg'} alt={movie.Title} />
      <MovieCardTitle>{movie.Title}</MovieCardTitle>
    </MovieCardContainer>
  );
};

export default MovieCard;