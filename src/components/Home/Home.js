import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { APIKey } from "../../common/Apis/MovieApiKey";
import MovieApi from "../../common/Apis/MovieApi";
const Home = () => {
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      ).catch((err) => {
        console.log("Err:", err);
      });
      console.log("The response from API", response);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
