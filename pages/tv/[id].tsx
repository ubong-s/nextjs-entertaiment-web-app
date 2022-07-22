import { MoviesList, OverviewCast, Seo } from '../../components';
import { TVPageProps } from '../../types';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations';

const SingleTVPage: React.FC<TVPageProps> = ({ show, cast, similar }) => {
   similar = similar.map((show) => ({ ...show, media_type: 'tv' })).slice(0, 4);

   return (
      <motion.div
         variants={fadeIn}
         initial='initial'
         animate='animate'
         exit='exit'
      >
         <Seo title={show.name} />
         <OverviewCast movie={show} cast={cast} media_type='tv' />
         <MoviesList items={similar} title='Similar TV Series' />
      </motion.div>
   );
};

export default SingleTVPage;

export const getServerSideProps = async (context: any) => {
   const tv_id = context.params.id;

   const response1 = fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US`
   ).then((res) => res.json());

   const response2 = fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US`
   ).then((res) => res.json());

   const response3 = fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}/similar?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1`
   ).then((res) => res.json());

   const [show, credits, similar] = await Promise.all([
      response1,
      response2,
      response3,
   ]);

   return {
      props: {
         show,
         cast: credits.cast,
         similar: similar.results,
      },
   };
};
