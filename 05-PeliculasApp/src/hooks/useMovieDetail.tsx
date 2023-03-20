import { useEffect, useState } from 'react';
import { MovieFull } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';
import { CreditsResponse, Cast } from '../interfaces/CreditsInterface';

interface MoviDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetail = (movieId: number) => {
  const [state, setState] = useState<MoviDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const movieCastPromise = movieDB.get<CreditsResponse>(
      `/${movieId}/credits`,
    );
    const [movieDetailsResp, movieCastResp] = await Promise.all([
      movieDetailsPromise,
      movieCastPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: movieCastResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
};
