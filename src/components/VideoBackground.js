import React, { useEffect } from 'react';
import { API_options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
    const trailerVideo =useSelector(store => store.movies?.trailerVideo);
   useMovieTrailer(movieId);
  return (
    <div className=''>
        <iframe 
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+
          "?&autoplay=1&mute=1"}
        title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen></iframe>
    </div>
  )
};

export default VideoBackground;