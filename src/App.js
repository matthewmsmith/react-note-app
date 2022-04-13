import "./App.css";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import Notes from "./components/Notes";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "3/15/2015",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "5/15/2012",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "1/25/2020",
    },
  ]);

  const addNote = (text) => {
     const date = new Date();
     const newNote = {
       text: text,
       date: date.toLocaleDateString(),
       id: nanoid()
     };
     const newNotes = [...notes, newNote]
     setNotes(newNotes)
  }
  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id)
        setNotes(newNote)
      }
  

  return (
    <div className="container">
      <Notes notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />
    </div>
  );
};

export default App;
