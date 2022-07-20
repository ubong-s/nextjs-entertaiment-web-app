import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchComponent, Seo, MoviesList, Trending } from '../components';
import { fetchMedia, fetchSearch } from '../redux/features/home/homeSlice';
import { useAppDispatch } from '../redux/hooks';
import { RootState } from '../redux/store';

const Home: NextPage = (props) => {
   const dispatch = useAppDispatch();
   const { trending, recommended, searchResults } = useSelector(
      (state: RootState) => state.home
   );
   const [searchMovies, setSearchMovies] = useState('');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchMovies(e.target.value);
   };

   useEffect(() => {
      dispatch(fetchMedia());
   }, []);

   useEffect(() => {
      dispatch(fetchSearch(searchMovies));
   }, [searchMovies]);

   console.log(searchMovies);

   return (
      <>
         <Seo title='Home' />
         <SearchComponent
            name='movies/tv series'
            inputValue={searchMovies}
            placeholder='Search for Movies or TV Series'
            changeHandler={handleChange}
         />
         {searchMovies ? (
            <MoviesList
               items={searchResults}
               title='search'
               searchInput={searchMovies}
            />
         ) : (
            <>
               <Trending trending={trending} />
               <MoviesList items={recommended} title='Recommended for you' />
            </>
         )}
      </>
   );
};

export default Home;
