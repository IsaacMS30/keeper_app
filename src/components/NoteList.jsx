import React from "react";
import '../styles/NoteList.css';
import Note from './Note'

function NoteList({notes, setNotes}) {
  function deleteNote(id) {
    const updatedNotes = notes.filter( note => note.id !== id)
    setNotes(updatedNotes);
  }

  function editNote(id, newTitle, newContent) {
    const newNotes = notes.map(note =>
      note.id == id ? {...note, title: newTitle, content: newContent} : note)
    setNotes(newNotes)
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
            onEdit = {editNote}
        />
      ))}
    </div>
  );
}

export default NoteList;
