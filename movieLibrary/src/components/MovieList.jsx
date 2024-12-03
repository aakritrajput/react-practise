import { useSelector } from 'react-redux';
import MovieItem from './MovieItem';

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div className='grid grid-cols-4 gap-3'>
      {movies.map((movie) => (
        <MovieItem key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
