import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { fetchMovies } from '../../redux/features/movies/moviesSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { SearchComponent, Seo, MoviesList } from '../../components';

const TV: NextPage = () => {
   const dispatch = useAppDispatch();
   const { loading, error, movies } = useSelector(
      (state: RootState) => state.movies
   );
   const [movieInput, setMovieInput] = useState('');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setMovieInput(e.target.value);
   };

   useEffect(() => {
      dispatch(fetchMovies(movieInput));
   }, [movieInput]);

   return (
      <>
         <Seo title='Movies' />
         <SearchComponent
            name='movies'
            inputValue={movieInput}
            placeholder='Search for Movies'
            changeHandler={handleChange}
         />
         <MoviesList items={movies} title='Movies' searchInput={movieInput} />
      </>
   );
};

export default TV;
