import React, { useState, useEffect } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

function HomePage({ notes, setNotes, addNote, onDelete }) {
  return (
    <div>
      

      {notes.map((noteItem) => {
        return <Note key={noteItem.id} note={noteItem} onDelete={onDelete} />;
      })}
    </div>
  );
}

export default HomePage;
