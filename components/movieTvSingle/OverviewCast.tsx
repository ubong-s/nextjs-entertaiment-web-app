import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { updateBookmarks } from '../../redux/features/user/userSlice';
import { useAppDispatch } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { MovieSingle, SingleCastProps } from '../../types';

interface Props {
   movie: MovieSingle;
   cast: SingleCastProps[];
}

const OverviewCast = ({ movie, cast }: Props) => {
   const {
      backdrop_path,
      genres,
      first_air_date,
      title,
      name,
      overview,
      poster_path,
      tagline,
      release_date,
      homepage,
   } = movie;

   const year =
      release_date?.substring(0, 4) || first_air_date?.substring(0, 4);

   return (
      <div>
         {/* Mobile Image */}
         <div className='lg:hidden'>
            <Image
               src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
               alt={title || name}
               height='250'
               width='450'
               layout='responsive'
            />
         </div>

         <div className='container grid gap-10 lg:grid-cols-3 lg:items-start py-12 lg:py-20 relative'>
            {/* Desktop image */}
            <div className='hidden lg:block col-span-1 sticky top-20 object-cover'>
               <Image
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  alt={title || name}
                  height={575}
                  width={400}
                  layout='responsive'
                  className='rounded-2xl'
               />
            </div>

            {/* Overview Section */}
            <div className='col-span-2 '>
               <div className='flex flex-col gap-4 items-start'>
                  <h1 className='text-3xl lg:text-4xl mb-4'>
                     {title || name} ({year})
                  </h1>
                  {tagline && (
                     <p className='italic text-xl lg:text-2xl'>
                        Tagline: {tagline}
                     </p>
                  )}

                  <p className='lg:text-lg'>
                     <span className='flex gap-2 flex-wrap'>
                        {genres?.map((genre) => (
                           <span
                              key={genre.id}
                              className='bg-themeBlueDark px-3 py-1 font-medium rounded-md italic text-themeGrey'
                           >
                              {genre.name}
                           </span>
                        ))}
                     </span>
                  </p>

                  <p className='lg:text-xl'>{overview}</p>
                  <a
                     href={homepage}
                     target='_blank'
                     rel='noreferrer'
                     className='px-4 py-3 bg-themeRed rounded-md my-4 font-medium tracking-wider'
                  >
                     Official Website
                  </a>
               </div>

               {/* Cast Section */}
               <div className='py-8'>
                  <h2 className='text-xl lg:text-3xl mb-4'>Cast</h2>
                  <div className='flex flex-wrap gap-2'>
                     {cast.map((member) => (
                        <p
                           key={member.id}
                           className='bg-themeBlueDark px-3 py-1 font-medium rounded-md lg:text-lg'
                        >
                           {member.name}

                           {member.character && (
                              <span className='italic font-light opacity-60 '>
                                 {' - '}
                                 {member.character}
                              </span>
                           )}
                        </p>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OverviewCast;
