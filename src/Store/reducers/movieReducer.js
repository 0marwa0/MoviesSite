import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
export const fetchMovies =createAsyncThunk("movies/fetchMovies",()=>{
    return fetch("").then(response=>response.json()).then(response=>console.log(response))
})