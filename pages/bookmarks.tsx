import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MoviesList, SearchComponent, Seo } from '../components';
import { RootState } from '../redux/store';
import { Bookmark } from '../types';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';

const Bookmarks: NextPage = () => {
   const { bookmarks } = useSelector((state: RootState) => state.user);
   const [searchValue, setSearchValue] = useState('');
   const [searchResults, setSearchResults] = useState<Bookmark[]>([]);
   const [bookmarkedMovies, setbookmarkedMovies] = useState<Bookmark[]>([]);
   const [bookmarkedShows, setbookmarkedShows] = useState<Bookmark[]>([]);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchValue(e.target.value);
   };

   const formatMedia = () => {
      let movies = bookmarks.filter((item) => item.media_type === 'movie');
      let shows = bookmarks.filter((item) => item.media_type === 'tv');

      setbookmarkedMovies(movies);
      setbookmarkedShows(shows);
   };

   const fetchSearch = () => {
      let temp = bookmarks.filter((item) => {
         let params = item.name || item.title;

         return params.toLowerCase().includes(searchValue?.toLowerCase());
      });

      setSearchResults(temp);
   };

   useEffect(() => {
      formatMedia();
      // eslint-disable-next-line
   }, [bookmarks]);

   useEffect(() => {
      fetchSearch();
      // eslint-disable-next-line
   }, [searchValue, bookmarks]);

   return (
      <motion.div
         variants={fadeIn}
         initial='initial'
         animate='animate'
         exit='exit'
      >
         <Seo title='Bookmarks' />
         <SearchComponent
            name='bookmark'
            inputValue={searchValue}
            placeholder='Search for bookmarked movies/shows'
            changeHandler={handleChange}
         />
         {searchValue ? (
            <MoviesList
               items={searchResults}
               bookEmptyAlert={true}
               title={`Search results for "${searchValue}"`}
            />
         ) : (
            <>
               <MoviesList
                  items={bookmarkedMovies}
                  bookEmptyAlert={true}
                  title='Bookmarked Movies'
               />
               <MoviesList
                  items={bookmarkedShows}
                  bookEmptyAlert={true}
                  title='Bookmarked Shows'
               />
            </>
         )}
      </motion.div>
   );
};

export default Bookmarks;
