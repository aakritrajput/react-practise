// src/components/SearchBar.js
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/slices/movieSlice';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      dispatch(fetchMovies(searchTerm));
    }
  };

  return (
    <div className='w-[100%] flex justify-center  my-3'>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className='w-[70%] p-3 focus:outline-none bg-white bg-opacity-10 rounded-l-2xl'
        placeholder='Search your movie'
      />
      <button onClick={handleSearch} className='w-[10%] p-3  bg-[#1f461f]  rounded-r-2xl'>Search</button>
    </div>
  );
};

export default SearchBar;
