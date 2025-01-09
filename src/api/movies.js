// src/api/movies.js

const API_KEY = '75ea919e'; // Replace with your actual API key
const BASE_URL = 'https://www.omdbapi.com/';

// Function to fetch movies by title
export const fetchMovies = async (searchTerm) => {
  const url = searchTerm
    ? `${BASE_URL}?s=${searchTerm}&apikey=${API_KEY}`
    : `${BASE_URL}?s=all&apikey=${API_KEY}`; // Adjust this line to fetch all movies

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.Search || []; // Return an empty array if no movies found
};

// Function to fetch movie details by ID
export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data; // Return the movie details
};