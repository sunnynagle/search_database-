import React from 'react'
import './list.css'
import { SearchResults } from './SearchResults';

export const SeachResultsList = ({results})=> {
  return (
    <div className='results-list'>
    
       {results.map((results,id) =>{
            return <SearchResults results={results} key={id}/>
        })}
    </div>
    
   
  );
};
