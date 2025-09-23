import React from "react";
import '../styles/NoteList.css';
import Note from './Note'

function NoteList({notes, setNotes}) {
  function deleteNote(id) {
    const updatedNotes = notes.filter( note => note.id !== id)
    setNotes(updatedNotes);
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
