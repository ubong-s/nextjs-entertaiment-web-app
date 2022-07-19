import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MovieCard from './MovieCard';

const MovieList = () => {
   const { movies } = useSelector((state: RootState) => state.movies);
   return (
      <div className='container list'>
         {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
         ))}
      </div>
   );
};

export default MovieList;
