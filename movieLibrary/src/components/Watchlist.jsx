import { useSelector } from 'react-redux';
import MovieItem from './MovieItem';

const Watchlist = () => {
  const watchlist = useSelector((state) => state.movies.watchlist);

  return (
    <div className='w-[100%] ' >
      <div className='w-[100%] flex justify-center p-3'> 
        <h2 className='text-white text-2xl mx-auto mb-4 border-[4px] p-2  rounded-2xl border-[#461f20]'>Watchlist</h2>
      </div>
      <div className='w-[100%] p-3 grid grid-cols-4'>{watchlist.map((movie) => (
        <MovieItem key={movie.imdbID} movie={movie} />
      ))}
      </div>
      
    </div>
  );
};

export default Watchlist;
