import { createContext, useEffect, useState } from "react";
import React from "react";

const PostContext = createContext();
const ContextProvider = ({ childern }) => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    const initialValue = JSON.parse(saved);

    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <PostsContext.Provider value={{ notes, setNotes }}>
      {childern}
    </PostsContext.Provider>
  );
};

export { ContextProvider, PostsContext };
