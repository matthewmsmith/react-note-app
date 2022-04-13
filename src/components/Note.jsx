import React from 'react'
import {MdDeleteForever} from 'react-icons/md';
const Note = ({id, text, date, handleDeleteNote }) => {
  return (
    <div className='note'>
      <span>{text}</span>
      <div className="note__footer">
        <small>{date}</small>
        <MdDeleteForever onClick={() => handleDeleteNote(id)}  className='note__delete'/>
      </div>
    </div>
  )
}

export default Note