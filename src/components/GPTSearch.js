import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { Background_IMG } from '../utils/constants';

const GPTSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
    <img className="h-screen object-cover md:w-screen" src={Background_IMG} alt='bg'/>
       </div>
    <div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </>
  )
};

export default GPTSearch;