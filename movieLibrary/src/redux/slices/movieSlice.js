import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchMovies = createAsyncThunk(
     'movies/fetchMovies', 
      async (searchTerm) => { 
        const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=c404fc92`);
        return response.data.Search; 
    })
          // action types generated through createAsyncThunk

const movieSlice = createSlice({
    name : 'movies',
    initialState: { watchlist: [], movies: [], status:'idle'},
    reducers: {
         addToWatchlist: (state, action) => { 
            state.watchlist.push(action.payload); 
        }, 
         removeFromWatchlist: (state, action) => { 
            state.watchlist = state.watchlist.filter(movie => movie.imdbID !== action.payload); 
        }, 
    },
    extraReducers: (builder) => { 
        builder 
            .addCase(fetchMovies.pending, (state) => { 
                state.status = 'loading'; 
            }) 
            .addCase(fetchMovies.fulfilled, (state, action) => { 
                state.status = 'succeeded'; state.movies = action.payload; 
            }) 
            .addCase(fetchMovies.rejected, (state) => { 
                state.status = 'failed'; 
            }); 
        }

})

export const { addToWatchlist, removeFromWatchlist } = movieSlice.actions; 
export default movieSlice.reducer