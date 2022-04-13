import React from 'react'
import {MdSearch} from 'react-icons/md'
import '../App.css'
const Search = ({handleSearch}) => {
  return (
    <div className='search'>
    < MdSearch 
    className='search__icons' />
    <input type="text" 
    placeholder='Type to search for a note...' 
    onChange={(e) => handleSearch(e.target.value)}
    />
    </div>
  )
}

export default Search