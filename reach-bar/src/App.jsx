
import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { SeachResultsList } from './components/SeachResultsList';

function App() {
  const [results, setResults] =useState([]);

  return (
 <div className='App'>
  <div className='search-bar-container'>
    <SearchBar  setResults={ setResults}/>
    <SeachResultsList results={results}/>
  </div>
 </div>

  )
}

export default App
