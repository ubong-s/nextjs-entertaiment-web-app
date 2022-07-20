import { useSelector } from 'react-redux';
import { SingleMedia } from '../../types';
import MovieCard from '../shared/MovieCard';
import PageTitle from './PageTitle';

interface Props {
   items: SingleMedia[];
   title: string;
   searchInput?: string;
}

const MoviesList: React.FC<Props> = ({ items, title, searchInput = '' }) => {
   return (
      <section className='pb-10'>
         <PageTitle
            title={title}
            searchInput={searchInput}
            searchLength={items.length}
         />
         <div className='container list'>
            {items.map((item) => {
               return <MovieCard key={item.id} {...item} />;
            })}
         </div>
      </section>
   );
};

export default MoviesList;
