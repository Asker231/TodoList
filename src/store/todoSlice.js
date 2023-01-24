import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:{
        arr:[]
    },
    reducers:{
        addTodo(state,action){
            state.arr.push(action.payload)
            console.log(action.payload);
        }
    }
})
export const{addTodo} = todoSlice.actions

export default todoSlice.reducer