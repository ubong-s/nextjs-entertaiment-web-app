import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MoviesList, SearchComponent, Seo } from '../components';
import { useAppDispatch } from '../redux/hooks';
import { RootState } from '../redux/store';
import { SingleMedia } from '../types';

const Bookmarks: NextPage = () => {
   const dispatch = useAppDispatch();
   const { bookmarks } = useSelector((state: RootState) => state.user);
   const [searchValue, setSearchValue] = useState('');
   const [searchResults, setSearchResults] = useState<SingleMedia[]>([]);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchValue(e.target.value);
   };

   let bookmarkedMovies = bookmarks.filter(
      (item) => item.media_type === 'movie'
   );
   let bookmarkedShows = bookmarks.filter((item) => item.media_type === 'tv');

   let fetchSearch = () => {
      let temp = bookmarks.filter((item) => {
         let params = item.name || item.title;

         return params.toLowerCase().includes(searchValue?.toLowerCase());
      });

      setSearchResults(temp);
   };

   useEffect(() => {
      fetchSearch();
   }, [searchValue, bookmarks]);

   return (
      <>
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
      </>
   );
};

export default Bookmarks;
