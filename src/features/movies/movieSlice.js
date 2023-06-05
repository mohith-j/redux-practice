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

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
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
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
