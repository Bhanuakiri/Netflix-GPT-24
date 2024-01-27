import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import {  addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies =() =>{
    //api fetch for Movies
    const dispatch = useDispatch();
    const PopularMovies = useSelector(store => store.movies.PopularMovies);
    const getPopularMovies = async () =>{
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_options);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    };
  
    useEffect(()=>{
       if(!PopularMovies) getPopularMovies();
    },[]);

};

export default usePopularMovies;