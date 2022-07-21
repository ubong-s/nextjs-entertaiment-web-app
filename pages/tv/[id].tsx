import { OverviewCast, Seo } from '../../components';
import { TVPageProps } from '../../types';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations';

const SingleTVPage: React.FC<TVPageProps> = ({ show, cast }) => {
   return (
      <motion.div
         variants={fadeIn}
         initial='initial'
         animate='animate'
         exit='exit'
      >
         <Seo title={show.name} />
         <OverviewCast movie={show} cast={cast} />
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

   const [show, credits] = await Promise.all([response1, response2]);

   return {
      props: {
         show,
         cast: credits.cast,
      },
   };
};
