import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
   SearchComponent,
   Seo,
   MoviesList,
   Trending,
   Loading,
} from '../components';
import { fetchMedia, fetchSearch } from '../redux/features/home/homeSlice';
import { useAppDispatch } from '../redux/hooks';
import { RootState } from '../redux/store';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';

const Home: NextPage = (props) => {
   const dispatch = useAppDispatch();
   const { loading, trending, recommended, searchResults } = useSelector(
      (state: RootState) => state.home
   );
   const [searchMovies, setSearchMovies] = useState('');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchMovies(e.target.value);
   };

   useEffect(() => {
      dispatch(fetchMedia());
      // eslint-disable-next-line
   }, []);

   useEffect(() => {
      dispatch(fetchSearch(searchMovies));
      // eslint-disable-next-line
   }, [searchMovies]);

   return (
      <motion.div
         variants={fadeIn}
         initial='initial'
         animate='animate'
         exit='exit'
      >
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
         ) : loading ? (
            <Loading />
         ) : (
            <>
               <Trending trending={trending} />
               <MoviesList items={recommended} title='Recommended for you' />
            </>
         )}
      </motion.div>
   );
};

export default Home;
