import { useEffect, useState } from 'react';
import { MovieFull } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

interface MoviDetails {
  isLoading: boolean;
  movieFull: MovieFull;
  cast: any[];
}

export const useMovieDetail = (movieId: number) => {
  const [state, setState] = useState<MoviDetails>();

  const getMovieDetails = async () => {
    const resp = await movieDB.get<MovieFull>(`/${movieId}`);
    console.log(resp.data.overview);
  };

  useEffect(() => {
    getMovieDetails();
  });
  return (
    state
  );
};
