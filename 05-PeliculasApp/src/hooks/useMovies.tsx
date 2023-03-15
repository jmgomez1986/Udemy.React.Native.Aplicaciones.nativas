import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBResponse, Movie } from '../interfaces/movieInterface';

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [ moviesInCinema, setMoviesInCinema ] = useState<Movie[]>([]);
  const [ moviesPopular, setMoviesPopular ] = useState<Movie[]>([]);

  const getMovies = async () => {
    const respNowPlaying = await movieDB.get<MovieDBResponse>('/now_playing');
    const respPopular = await movieDB.get<MovieDBResponse>('/popular');
    await movieDB.get<MovieDBResponse>('/top_rated');
    await movieDB.get<MovieDBResponse>('/upcoming');
    setMoviesInCinema(respNowPlaying.data.results);
    setMoviesPopular(respPopular.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesInCinema,
    moviesPopular,
    isLoading,
  };
};
