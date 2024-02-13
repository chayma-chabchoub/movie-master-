import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/userSlice"




import movieSlice from "./slices/movieSlice";
export default configureStore({reducer:{user: rootReducer,movie:movieSlice}})