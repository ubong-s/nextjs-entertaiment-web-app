import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { updateBookmarks } from '../../redux/features/user/userSlice';
import { useAppDispatch } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { Bookmark, SingleMedia } from '../../types';

interface Props {
   item: SingleMedia | Bookmark;
}

const MovieCard: React.FC<Props> = ({ item }) => {
   const {
      id,
      title,
      name,
      backdrop_path,
      poster_path,
      release_date,
      first_air_date,
      media_type,
   } = item;
   const dispatch = useAppDispatch();
   const { bookmarks } = useSelector((state: RootState) => state.user);
   const handleBookmarks = () => {
      dispatch(
         updateBookmarks({
            id,
            name,
            title,
            backdrop_path,
            poster_path,
            media_type,
            release_date,
            first_air_date,
         })
      );
   };

   const bookmarked = bookmarks.find((item) => item.id === id);
   const slug = media_type === 'movie' ? 'movies' : media_type;

   return (
      <article className='card'>
         <button
            title='bookmark btn'
            className='bookmark-btn'
            onClick={handleBookmarks}
         >
            <svg width='12' height='14' xmlns='http://www.w3.org/2000/svg'>
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
               <div className='card_image'>
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
                     height='135'
                     layout='responsive'
                     className='-z-10'
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
               <p className='card_info'>
                  <span>
                     {first_air_date?.substring(0, 4) ||
                        release_date?.substring(0, 4) ||
                        'NA'}
                  </span>
                  <span className='card_dot'></span>
                  <span className='card_category'>
                     {media_type === 'tv' ? (
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
                     ) : (
                        <svg
                           width='12'
                           height='12'
                           xmlns='http://www.w3.org/2000/svg'
                        >
                           <path
                              d='M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z'
                              fill='#FFF'
                              opacity='.75'
                           />
                        </svg>
                     )}
                     <span className='capitalize'>
                        {media_type === 'tv' ? 'TV Series' : media_type}
                     </span>
                  </span>
               </p>
               <h4>{name || title}</h4>
            </a>
         </Link>
      </article>
   );
};

export default MovieCard;
