import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/Apis/MovieApiKey";
import MovieApi from "../../common/Apis/MovieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movie/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await MovieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    //    .catch((err) => {
    //     console.log("Err:", err);
    //   });
    // console.log("The response from API", response);
    // dispatch(addMovies(response.data));
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movie/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";
    const response = await MovieApi.get(
      `?apiKey=${APIKey}&s=${seriesText}&type=series`
    );
    //    .catch((err) => {
    //     console.log("Err:", err);
    //   });
    // console.log("The response from API", response);
    // dispatch(addMovies(response.data));
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows:{}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    addShows: (state, { payload }) => {
      state.shows = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fulfilled");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fulfilled");
      return { ...state, shows: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows= (state)=> state.movies.shows;
export default movieSlice.reducer;
