 import SearchBar from './components/SearchBar'; 
import MovieList from './components/MovieList'; 
import Watchlist from './components/Watchlist'; 

const App = () => { 
  return ( 
     <div className='bg-black text-white mx-auto w-[100vw]'> 
     <div className='flex w-[100%]'><h1 className='text-white text-3xl mx-auto mb-4 border-[4px] p-2  rounded-2xl border-[#1f461f]'>Movie Library</h1></div>
      <SearchBar /> 
      <MovieList /> 
      <Watchlist /> 
    </div> 
    ); 
  }; 
  
  export default App