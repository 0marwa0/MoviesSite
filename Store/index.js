// store
import movieReducer from "./reducers/movieReducer.js"
import {configureStore} from "@reduxjs/toolkit"

 const store = configureStore({
    movies:movieReducer
})
export default store