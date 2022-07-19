export interface Movie {
   adult: boolean;
   backdrop_path: string;
   genre_ids: number[];
   id: number;
   original_language: string;
   original_title: string;
   overview: string;
   popularity: number;
   poster_path: string;
   release_date: string;
   title: string;
   video: boolean;
   vote_average: number;
   vote_count: number;
}

// Define a type for the slice state
export interface MoviesState {
   loading: boolean;
   trending_movies: Movie[];
   recommended_movies: Movie[];
   trending_error: string;
   recommended_error: string;
}
