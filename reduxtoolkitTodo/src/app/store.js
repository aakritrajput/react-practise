// creating stores

//1st step --> configure store leke ana he 

import {configureStore} from '@reduxjs/toolkit';  //store bnn gaya he but completely ready nhi he use case ke liye
import todoReducer from '../features/todo/todoSlice'; 

export const store = configureStore({             //configureStore always take objects as arguments
    reducer: todoReducer
})                                                    

//next step --> make reducers 

