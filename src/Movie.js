import React from 'react';

export default function Movie({ movie }) {
  return <div className='movie-container'>
    <h3>{movie.Title}</h3>
    <p>Released: {movie.Released}</p>
    <p>Genre: {movie.Genre}</p>
    <p>Director: {movie.Director}</p>
  </div>;
}
