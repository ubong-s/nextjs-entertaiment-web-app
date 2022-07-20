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
