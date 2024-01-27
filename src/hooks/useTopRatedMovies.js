import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies =() =>{
    //api fetch for Movies
    const dispatch = useDispatch();
    const TopRatedMovies = useSelector(store => store.movies.TopRatedMovies);
    const getTopRatedMovies = async () =>{
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_options);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    };
  
    useEffect(()=>{
       if(!TopRatedMovies) getTopRatedMovies();
    },[]);

};

export default useTopRatedMovies;