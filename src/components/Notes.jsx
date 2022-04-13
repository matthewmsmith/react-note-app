import React from 'react'
import AddNote from './AddNote'
import Note from './Note'
const Notes = ({notes,  handleAddNote, handleDeleteNote}) => {
  return (
    <div className='notes__list'>
      {notes.map((note) => (
        <Note id={note.id} 
        text={note.text} 
        date={note.date} 
        key={note.id} 
        handleDeleteNote={handleDeleteNote}
        />
        
  ))}
     <AddNote handleAddNote={handleAddNote}  />
    </div>
  )
}

export default Notes