import React from 'react'

function Search({ search, onSearch }) {



  return (
    <div>
        <input 
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        type="text" 
        placeholder="Search for movie by title" 
        style={{width: '250px'}}/>
    </div>
  )
}

export default Search;
