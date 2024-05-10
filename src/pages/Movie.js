import React from 'react';
import MovieCard from './MovieCard';

const Home = ({ movies }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <MovieCard id={movie.id} title={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
