import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
   name: string;

   backdrop_path: string;
   poster_path: string;
   first_air_date: string;
}

const TVCard: React.FC<Props> = ({
   name,
   backdrop_path,
   poster_path,
   first_air_date,
}) => {
   return (
      <article className='card'>
         <button title='bookmark btn' className='bookmark-btn'>
            <svg width='12' height='14' xmlns='http://www.w3.org/2000/svg'>
               <path
                  d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z'
                  stroke='#FFF'
                  strokeWidth='1.5'
                  fill='none'
               />
            </svg>
         </button>
         <Link href='/'>
            <a href=''>
               <Image
                  src={
                     backdrop_path
                        ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
                        : poster_path
                        ? `https://image.tmdb.org/t/p/original/${poster_path}`
                        : '/assets/placeholder-image.png'
                  }
                  alt={name}
                  width='200'
                  height='135'
                  layout='responsive'
                  className='card_image'
               />
               <p className='card_info'>
                  <span>
                     {first_air_date ? first_air_date.substring(0, 4) : 'NA'}
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
                     TV Series
                  </span>
               </p>
               <h4>{name}</h4>
            </a>
         </Link>
      </article>
   );
};

export default TVCard;
