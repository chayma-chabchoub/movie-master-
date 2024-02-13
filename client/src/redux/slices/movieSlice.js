import {createSlice} from '@reduxjs/toolkit'
import{ createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const getmovies = createAsyncThunk(
    "/movie/getmovies", async (_, {rejectWithValue}) => {
        try {
            const res = await axios.get("/movie/getmovies", {
                headers:{
                    token:localStorage.getItem("token")
                }
            })
            return res.data
        

        } catch (error) {
            return rejectWithValue(error.response.data.msg)
           
        }
    }
)

export const addmovie = createAsyncThunk(
    "/movie/addmovie", async (info, {rejectWithValue,dispatch}) => {
        try {
            const res = await axios.post("/movie/addmovie",info, {
                headers:{
                    token:localStorage.getItem("token")
                }
            })
            dispatch(getmovies())
            return res.data

        } catch (error) {
            return rejectWithValue(error.response.data.msg)
            //  console.log(error.response.data.msg)
        }
    }
)
export const deletemovie = createAsyncThunk(
    "/movie/deletemovie", async (userId, {rejectWithValue,dispatch}) => {
        try {
            const res = await axios.delete(`/movie/deletemovie/${userId._id}`, {
                headers:{
                    token:localStorage.getItem("token")
                }
            })
            dispatch(getmovies())
            return res.data

        } catch (error) {
            return rejectWithValue(error.response.data.msg)
            //  console.log(error.response.data.msg)
        }
    }
)

export const updatemovie = createAsyncThunk(
    "/movie/updatemovie", async (userId, {rejectWithValue,dispatch}) => {
        try {
            const res = await axios.put(`/movie/updatemovie/${userId._id}`,userId, {
                headers:{
                    token:localStorage.getItem("token")
                }
            })
            dispatch(getmovies())
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.msg)
            //  console.log(error.response.data.msg)
        }
    }
)
const movieSlice = createSlice({
    name : "movie",
    initialState: {
        isLoading: false,
        img:"",
        movieList: [{title:"",
        desc:""}],
        errors: null
    },
   
    extraReducers: {
        //GEt User Task
        [getmovies.pending]: (state) => {state.isLoading= true },

        [getmovies.fulfilled]: (state, action) => {
            state.isLoading= false 
            state.errors = null
            state.movieList = action.payload.movies

        },

        [getmovies.rejected]: (state, action) => {
            state.isLoading= false 
            state.movieList = []
            state.token = null
            state.errors = action.error
        },

//delete Task
        [deletemovie.pending]: (state) => {state.isLoading= true },

        [deletemovie.fulfilled]: (state, action) => {
            state.isLoading= false 
            state.errors = null
            state.movieList = action.payload

        },

        [deletemovie.rejected]: (state, action) => {
            state.isLoading= false 
            state.isAuth = false
            state.token = null
            state.errors = action.error
        },
        
    }
})

export default movieSlice.reducer