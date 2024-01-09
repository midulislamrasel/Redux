import { createSlice } from "@reduxjs/toolkit";

export interface CounterState


const initialState : counterSlice 



export const counterSlice =  createSlice({
    name:'conuter',
    initialState,
    reducers : {
        increment : (state)=>{
            state.value += 1
        }
    }
})