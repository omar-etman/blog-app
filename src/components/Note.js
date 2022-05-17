import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

function Note({ note, onDelete }) {
  function handleClick() {
    onDelete(note.id);
  }

  return (
    <div className="note ">
      <h1>{note.title}</h1>
      <p>{note.author}</p>
      <textarea>{note.content}</textarea>
      <ButtonGroup aria-label="Basic example">
        <Button variant="danger" onClick={handleClick}>
          Delete
        </Button>
        <Button variant="warning">Edit</Button>
        <Link to={"//posts" + note.id}>
          {" "}
          <Button variant="info">Read More</Button>
        </Link>
      </ButtonGroup>
    </div>
  );
}

export default Note;
