export interface HomeState {
   loading: boolean;
   trending: SingleMedia[];
   recommended: SingleMedia[];
   searchResults: SingleMedia[];
   trending_error: string;
   recommended_error: string;
   searchResults_error: string;
}

export interface TVState {
   loading: boolean;
   shows: SingleMedia[];
   error: string;
}

export interface UserState {
   user: string;
   bookmarks: SingleMedia[];
}

export interface MoviesState {
   loading: boolean;
   movies: SingleMedia[];
   error: string;
}

export interface SingleMedia {
   adult: boolean | undefined;
   backdrop_path: string;
   id: number;
   name: string | '';
   title: string | '';
   original_language: string;
   original_title: string | '';
   original_name: string | '';
   overview: string;
   poster_path: string;
   media_type: string | '';
   genre_ids: number[];
   popularity: number;
   first_air_date: string | '';
   release_date: string | '';
   video: boolean | '';
   vote_average: number;
   vote_count: number;
   origin_country: string[] | [];
}

export interface SingleCastProps {
   adult: boolean;
   cast_id: number;
   character: string;
   credit_id: string;
   gender: number;
   id: number;
   known_for_department: string;
   name: string;
   order: number;
   original_name: string;
   popularity: number;
   profile_path: string;
}

export interface MoviePageProps {
   movie: MovieSingle;
   cast: SingleCastProps[];
}

export interface TVPageProps {
   show: MovieSingle;
   cast: SingleCastProps[];
}

interface Genre {
   id: number;
   name: string;
}
interface Languages {
   english_name: string;
   iso_639_1: string;
   name: string;
}

export interface MovieSingle {
   adult: boolean;
   backdrop_path: string;
   belongs_to_collection: null;
   budget: number;
   genres: Genre[];
   homepage: string;
   id: number;
   imdb_id: string;
   original_language: string;
   original_title: string;
   overview: string;
   popularity: number;
   poster_path: string;
   release_date: string;
   revenue: number;
   runtime: number;
   spoken_languages: Languages[];
   status: string;
   tagline: string;
   title: string;
   name: string;
   video: false;
   vote_average: number;
   vote_count: number;
   first_air_date: string;
   last_air_date: string;
}
