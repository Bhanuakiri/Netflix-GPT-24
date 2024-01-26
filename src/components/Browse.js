import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GPTSearch from './GPTSearch';

const Browse = () => {
  const ShowgptSearch= useSelector(store => store.Gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
    <Header/>
    {ShowgptSearch ? (
        <GPTSearch />
      ) : (
        <React.Fragment>
          <MainContainer />
          <SecondaryContainer />
        </React.Fragment>
      )}
    </div>
  )
}

export default Browse