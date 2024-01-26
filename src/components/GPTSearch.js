import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { Background_IMG } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
     <img src={Background_IMG} alt='bg'/>
       </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
};

export default GPTSearch;