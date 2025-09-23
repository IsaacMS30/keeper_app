import React from "react";
import '../styles/Note.css';
import { FaRegTrashAlt } from "react-icons/fa";

function Note({id, title, content, onDelete}) {
  function handleClick() {
    onDelete(id);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}><FaRegTrashAlt className="icon"/></button>
    </div>
  );
}

export default Note;
