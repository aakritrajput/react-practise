import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../redux/slices/movieSlice';

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.movies.watchlist);

  const isInWatchlist = watchlist.some((item) => item.imdbID === movie.imdbID);

  return (
    <div className='w-[100%] mx-auto p-3'>
      <h3 className='text-white text-lg mb-2 ml-2 font-medium '>{movie.Title}</h3>
      <img src={movie.Poster} alt={movie.Title} className=' border-[4px] border-[#235123] rounded-lg' />
      <div className='w-[100%] mx-auto flex '>
        {isInWatchlist ? (
        <button onClick={() => dispatch(removeFromWatchlist(movie.imdbID)) } className="px-3 py-2 mt-2  bg-[#511d23] text-white rounded-2xl">
          Remove from Watchlist
        </button>
      ) : (
        <button onClick={() => dispatch(addToWatchlist(movie))} className="px-3 py-2 mt-2  bg-[#1f461f] text-white rounded-2xl">
          Add to Watchlist
        </button>
      )}
      </div>
    </div>
  );
};

export default MovieItem;
