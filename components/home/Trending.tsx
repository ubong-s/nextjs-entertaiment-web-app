import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { updateBookmarks } from '../../redux/features/user/userSlice';
import { useAppDispatch } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { Bookmark, SingleMedia } from '../../types';
import PageTitle from '../shared/PageTitle';

interface Props {
   trending: SingleMedia[];
}

const Trending: React.FC<Props> = ({ trending }) => {
   const dispatch = useAppDispatch();
   const { bookmarks } = useSelector((state: RootState) => state.user);

   const handleBookmarks =
      (item: Bookmark) =>
      (e: React.MouseEvent): void => {
         e.preventDefault();
         dispatch(updateBookmarks(item));
      };

   return (
      <section className='mb-16 '>
         <PageTitle title='Trending' />
         <div className='container'>
            <div className='slider-container'>
               {trending.map((item) => {
                  const {
                     id,
                     name,
                     title,
                     first_air_date,
                     release_date,
                     backdrop_path,
                     poster_path,
                     media_type,
                  } = item;
                  const bookmarked = bookmarks.find((item) => item.id === id);
                  const slug = media_type === 'movie' ? 'movies' : media_type;

                  return (
                     <article className='card w-full' key={id}>
                        <button
                           title='bookmark btn'
                           className='bookmark-btn'
                           onClick={handleBookmarks({
                              id,
                              name,
                              title,
                              backdrop_path,
                              poster_path,
                              media_type,
                              release_date,
                              first_air_date,
                           })}
                        >
                           <svg
                              width='12'
                              height='14'
                              xmlns='http://www.w3.org/2000/svg'
                           >
                              <path
                                 d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z'
                                 stroke='#FFF'
                                 strokeWidth='1.5'
                                 fill={bookmarked ? '#fff' : 'none'}
                              />
                           </svg>
                        </button>
                        <Link href={`/${slug}/${id}`}>
                           <a>
                              <div className='card_image '>
                                 <Image
                                    src={
                                       backdrop_path
                                          ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
                                          : poster_path
                                          ? `https://image.tmdb.org/t/p/original/${poster_path}`
                                          : '/assets/placeholder-image.png'
                                    }
                                    alt={name || title}
                                    width='200'
                                    height='100'
                                    layout='responsive'
                                 />
                                 <button title='view btn' className='view-btn'>
                                    <svg
                                       width='30'
                                       height='30'
                                       xmlns='http://www.w3.org/2000/svg'
                                    >
                                       <path
                                          d='M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z'
                                          fill='#FFF'
                                       />
                                    </svg>
                                    View
                                 </button>
                              </div>

                              <div className='absolute bottom-8 left-8'>
                                 <p className='card_info'>
                                    <span>
                                       {first_air_date?.substring(0, 4) ||
                                          release_date?.substring(0, 4) ||
                                          'NA'}
                                    </span>
                                    <span className='card_dot'></span>
                                    <span className='card_category'>
                                       <svg
                                          width='12'
                                          height='12'
                                          xmlns='http://www.w3.org/2000/svg'
                                       >
                                          <path
                                             d='M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z'
                                             fill='#FFF'
                                             opacity='.75'
                                          />
                                       </svg>
                                       <span className='capitalize '>
                                          {media_type}
                                       </span>
                                    </span>
                                 </p>
                                 <h4>{name || title}</h4>
                              </div>
                           </a>
                        </Link>
                     </article>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Trending;
