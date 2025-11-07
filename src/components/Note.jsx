import React, {useState} from "react";
import '../styles/Note.css';
import { FaRegTrashAlt, FaEdit, FaCheck } from "react-icons/fa";

function Note({id, title, content, onDelete, onEdit}) {
  const [newInfo, setNewInfo] = useState({
    newTitle: title,
    newContent: content
  });
  const [isEditing, setIsEditing] = useState(false)

  function handleDelete() {
    onDelete(id);
  }

  function handleEdit() {
    onEdit(id, newInfo.newTitle, newInfo.newContent)
    setIsEditing(false)
  }

  function handleChange(event) {
    const {name, value} = event.target
    setNewInfo({...newInfo, [name]: value})
  }

  return (
    <div className="note">
      {isEditing ? (
      <>
      <input
        type="text"
        value={newInfo.newTitle}
        name="newTitle"
        placeholder="Title"
        onChange={handleChange}
      />
      <textarea
        name="newContent"
        value={newInfo.newContent}
        placeholder="Take a note..."
        onChange={handleChange}
      />
      <button onClick={handleEdit}><FaCheck className="icon"/></button>
      </>
      )
      : (
      <>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => setIsEditing(true)}><FaEdit className="icon"/></button>
      <button onClick={handleDelete}><FaRegTrashAlt className="icon"/></button>
      </>
      )
      }
  
    </div>
  );
}

export default Note;
