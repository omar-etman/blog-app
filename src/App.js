import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReadMore from "./components/ReadMore";
import HomePage from "./components/HomePage";
import PostsBase from "./components/PostsBase";
import { useState, useEffect } from "react";
import RappBar from './components/RappBar'

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    const initialValue = JSON.parse(saved);

    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== id;
      });
    });
  }
  return (
    <Router>
      
  <RappBar notes={notes}
        setNotes={setNotes}
        onAdd={addNote}/>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              notes={notes}
              setNotes={setNotes}
              onAdd={addNote}
              onDelete={deleteNote}
            />
          }
        />
        <Route path="/PostsBase" element={<PostsBase />} />
        <Route path="/posts/:id" element={<ReadMore />} />
      </Routes>
    </Router>
  );
}

export default App;
