import React from 'react'
import {MdDeleteForever} from 'react-icons/md';
const Note = () => {
  return (
    <div className='note'>
      <span>These are notes!</span>
      <div className="note__footer">
        <small>13/04/2021</small>
        <MdDeleteForever  className='note__delete'/>
      </div>
    </div>
  )
}

export default Note