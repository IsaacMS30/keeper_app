import React from "react";
import '../styles/NoteList.css';
import Note from './Note'

function NoteList({notes}) {
    function deleteNote() {

    }

  return (
    <div className="note-list">
      {notes.map(note => (
        <Note
            key = {note.id}
            id = {note.id}
            title = {note.title}
            content = {note.content}
            onDelete = {deleteNote}
        />
      ))}
    </div>
  );
}

export default NoteList;
