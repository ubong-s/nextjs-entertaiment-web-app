import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { fetchTVShows } from '../../redux/features/tv/tvSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { SearchComponent, Seo, MoviesList } from '../../components';

const TV: NextPage = () => {
   const dispatch = useAppDispatch();
   const { loading, error, shows } = useSelector(
      (state: RootState) => state.tv
   );
   const [tvInput, setTvInput] = useState('');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setTvInput(e.target.value);
   };

   useEffect(() => {
      dispatch(fetchTVShows(tvInput));
      // eslint-disable-next-line
   }, [tvInput]);

   return (
      <>
         <Seo title='TV Series' />
         <SearchComponent
            name='tv series'
            inputValue={tvInput}
            placeholder='Search for TV series'
            changeHandler={handleChange}
         />
         <MoviesList items={shows} title='TV Series' searchInput={tvInput} />
      </>
   );
};

export default TV;
