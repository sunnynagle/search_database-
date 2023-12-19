import React from 'react'
import './searchResult.css'

export const SearchResults =({results}) =>{
    return(
        <div 
        className='search-result'
        onClick={(e)=> alert('You clicked on $(results)')
        }>
        {results.name}

        </div>
    )
}