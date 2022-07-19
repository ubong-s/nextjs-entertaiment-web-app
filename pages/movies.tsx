import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { fetchMovies } from '../redux/features/movies/moviesSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
   SearchComponent,
   MovieList,
   PageTitle,
   Loading,
   Error,
   Seo,
} from '../components';

const TV: NextPage = () => {
   const dispatch = useAppDispatch();
   const { loading, error } = useSelector((state: RootState) => state.movies);
   const [movieInput, setMovieInput] = useState('');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setMovieInput(e.target.value);
   };

   useEffect(() => {
      dispatch(fetchMovies(movieInput));
   }, [movieInput]);

   if (loading) {
      return <Loading />;
   }
   if (error) {
      return <Error error={error} />;
   }

   return (
      <>
         <Seo title='Movies' />
         <SearchComponent
            name='movies'
            inputValue={movieInput}
            placeholder='Search for Movies'
            changeHandler={handleChange}
         />
         <PageTitle title='Movies' searchInput={movieInput} />
         <MovieList />
      </>
   );
};

export default TV;
