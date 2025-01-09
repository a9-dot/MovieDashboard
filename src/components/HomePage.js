// src/components/HomePage.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import SearchBox from './SearchBox'; // Assuming you have a SearchBox component

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <SearchBox searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <MovieList searchTerm={searchTerm} />
    </div>
  );
};

export default HomePage;



// // src/components/HomePage.js
// import React, { useState, useEffect } from 'react';
// import MovieCard from './MovieCard';
// import { fetchMovies } from '../api/movies'; // Assume this function fetches movies from an API
// import Pagination from './Pagination'; // Import your custom Pagination component
// import { Message } from '../styles/StyledComponents'; // Import styled components for messages

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const moviesPerPage = 10;

//   useEffect(() => {
//     const getMovies = async () => {
//       const data = await fetchMovies(searchQuery);
//       setMovies(data);
//     };
//     getMovies();
//   }, [searchQuery]);

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//     setCurrentPage(1); // Reset to first page on new search
//   };

//   const indexOfLastMovie = currentPage * moviesPerPage;
//   const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
//   const displayedMovies = movies ? movies.slice(indexOfFirstMovie, indexOfLastMovie) : [];

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div style={{ padding: '20px' }}>
//       <input
//         type="text"
//         placeholder="Search movies..."
//         value={searchQuery}
//         onChange={handleSearch}
//         style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
//       />
//       <div className="movie-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {displayedMovies.length > 0 ? (
//           displayedMovies.map((movie) => (
//             <MovieCard key={movie.imdbID} movie={movie} />
//           ))
//         ) : (
//           <Message>No movies found.</Message>
//         )}
//       </div>
//       <Pagination totalMovies={movies.length} moviesPerPage={moviesPerPage} paginate={paginate} />
//     </div>
//   );
// };

// export default HomePage;