export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  backdropPath: string;
  releaseDate: Date;
  popularity: number;
  voteAverage: number;
  voteCount: number;
  genres: {
    id: number;
    name: string;
  }[];
  directors: {
    id: number;
    name: string;
  }[];
}
