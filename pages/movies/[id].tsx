import { MoviesList, OverviewCast, Seo } from '../../components';
import { MoviePageProps } from '../../types';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations';

const SingleMoviePage: React.FC<MoviePageProps> = ({
   movie,
   cast,
   similar,
}) => {
   similar = similar
      .map((movie) => ({ ...movie, media_type: 'movie' }))
      .slice(0, 4);

   return (
      <motion.div
         variants={fadeIn}
         initial='initial'
         animate='animate'
         exit='exit'
      >
         <Seo title={movie.title} />
         <OverviewCast movie={movie} cast={cast} media_type='movie' />
         <MoviesList items={similar.slice(0, 4)} title='Similar Movies' />
      </motion.div>
   );
};

export default SingleMoviePage;

export const getServerSideProps = async (context: any) => {
   const movie_id = context.params.id;

   const response1 = fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US`
   ).then((res) => res.json());

   const response2 = fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US`
   ).then((res) => res.json());

   const response3 = fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1`
   ).then((res) => res.json());

   const [movie, credits, similar] = await Promise.all([
      response1,
      response2,
      response3,
   ]);

   return {
      props: {
         movie,
         cast: credits.cast,
         similar: similar.results,
      },
   };
};
