import { OverviewCast, Seo } from '../../components';
import { MoviePageProps } from '../../types';

const SingleMoviePage: React.FC<MoviePageProps> = ({ movie, cast }) => {
   return (
      <>
         <Seo title={movie.title} />
         <OverviewCast movie={movie} cast={cast} />
      </>
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

   const [movie, credits] = await Promise.all([response1, response2]);

   return {
      props: {
         movie,
         cast: credits.cast,
      },
   };
};
