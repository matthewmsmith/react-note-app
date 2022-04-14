import "./App.css";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Notes from "./components/Notes";
import Search from "./components/Search";
import Header from "./components/Header";

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

  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if(savedNotes) {
      setNotes(savedNotes);
    }
  }, [])
  

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  
  }, [notes])
  

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearch={setSearch} />
        <Notes
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(search)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
