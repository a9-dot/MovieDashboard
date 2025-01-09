// src/hooks/useMovies.js
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = '75ea919e'; // Replace with your actual API key

// Fetch movies by title
const fetchMoviesByTitle = async (title) => {
  const { data } = await axios.get('http://www.omdbapi.com/', {
    params: {
      s: title,
      apikey: API_KEY,
    },
  });
  return data;
};

// Fetch movie details by ID
const fetchMovieDetails = async (id) => {
  const { data } = await axios.get('http://www.omdbapi.com/', {
    params: {
      i: id,
      apikey: API_KEY,
    },
  });
  return data;
};

// Custom hook to fetch movies
export const useMovies = (title) => {
  return useQuery({
    queryKey: ['movies', title],
    queryFn: () => fetchMoviesByTitle(title),
    enabled: !!title,
  });
};

// Custom hook to fetch movie details
export const useMovieDetails = (id) => {
  return useQuery({
    queryKey: ['movie', id],
    queryFn: () => fetchMovieDetails(id),
    enabled: !!id,
  });
};