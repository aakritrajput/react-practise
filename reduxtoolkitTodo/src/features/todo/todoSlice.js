import { createSlice , nanoid } from "@reduxjs/toolkit"; // nanoid to generate unique id's as we need id's to differentiate between elements

// initial state of the store

const initialState = {                                  // can  be object ,array
    todos: [{id:1, text: "hello world"}]
}

// creating slice (bigger version of reducers)

// function sayHello() {
//     console.log("hello world");
// }

export const todoSlice = createSlice({          //most of the time objects as arguments
    name: 'todo',                               // there are names of the slices , when using redux toolkit extension in browser the same name is shown
    initialState,
    reducers: { //properties and function and does not only write declaration but also write definition 
        addTodo: (state,action) => {  // we always get two arguments state and action -> state : gives access of the present values of initial state , action: when we need some values like id's we get that from action        //sayHello //give reference of a function do not call i.e, without ()
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        }, 
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        }
    }                                                                        
})   

export const {addTodo,removeTodo} = todoSlice.actions //exporting individual reduceres for use in components

export default todoSlice.reducer //store only updates values through registered reducers only
                                                                        
