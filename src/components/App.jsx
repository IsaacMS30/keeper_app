import { useState, useEffect } from 'react'
import '../styles/App.css'
import CreateArea from './CreateArea'
import Footer from './Footer'
import Header from './Header'
import NoteList from './NoteList'
import SearchBar from './SearchBar'


function App() {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes")
    return storedNotes ? JSON.parse(storedNotes): []
  })

  // Saves notes when detects a change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const [searchValue, setSearchValue] = useState("")

  const onSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  const filteredNotes = notes.filter( (note) => {
    return note.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      note.content.toLowerCase().includes(searchValue.toLowerCase())
  })

  const addNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  return (
    <div className='App'>
    <Header/>
    <CreateArea
      onAdd = {addNote}
    />
    <SearchBar
      onSearchChange={onSearchChange}
    />
    {notes.length === 0 && <h5>No notes to show, create one!</h5> }
    {notes.length > 0 && <NoteList
      notes = {filteredNotes}
      setNotes = {setNotes}
    />}
    <Footer/>
    </div>
  )
}

export default App
