import React, { useState } from "react";
import Notes from "./Notes";

const AddNote = ({ handleAddNote }) => {
  const [note, setNote] = useState("");
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNote(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (note.trim().length > 0) {
      handleAddNote(note);
      setNote("");
    }
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add note"
        onChange={handleChange}
        value={note}
      ></textarea>
      <div className="note__footer">
        <small>{characterLimit - note.length}</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
