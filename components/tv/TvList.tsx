import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import TVCard from './TVCard';

const TvList = () => {
   const { shows } = useSelector((state: RootState) => state.tv);
   return (
      <div className='container list'>
         {shows.map((show) => (
            <TVCard key={show.id} {...show} />
         ))}
      </div>
   );
};

export default TvList;
