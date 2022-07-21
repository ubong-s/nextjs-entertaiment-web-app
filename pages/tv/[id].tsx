import { OverviewCast, Seo } from '../../components';
import { TVPageProps } from '../../types';

const SingleTVPage: React.FC<TVPageProps> = ({ show, cast }) => {
   return (
      <>
         <Seo title={show.name} />
         <OverviewCast movie={show} cast={cast} />
      </>
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
