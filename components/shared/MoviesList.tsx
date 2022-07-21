import { useSelector } from 'react-redux';
import { SingleMedia } from '../../types';
import MovieCard from '../shared/MovieCard';
import PageTitle from './PageTitle';

interface Props {
   items: SingleMedia[];
   title: string;
   searchInput?: string;
   bookEmptyAlert?: boolean;
}

const MoviesList: React.FC<Props> = ({
   items,
   title,
   searchInput = '',
   bookEmptyAlert = false,
}) => {
   return (
      <section className='pb-10'>
         <PageTitle
            title={title}
            searchInput={searchInput}
            searchLength={items.length}
         />
         {items.length === 0 && bookEmptyAlert && (
            <div className='container'>
               <h3>No {title} Found</h3>
            </div>
         )}
         <div className='container list'>
            {items.map((item) => {
               return <MovieCard key={item.id} item={item} />;
            })}
         </div>
      </section>
   );
};

export default MoviesList;
