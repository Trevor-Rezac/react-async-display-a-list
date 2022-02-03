import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies }) {
  return <>
    <h2>Favorite Movies</h2>
    <div className='movie-list'>
      {movies.map((movie, i) => <Movie key={`${movie}-${i}`} movie={movie} />)}
    </div>
  </>;
}
