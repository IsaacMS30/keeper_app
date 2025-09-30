import { useState } from 'react'
import '../styles/App.css'
import CreateArea from './CreateArea'
import Footer from './Footer'
import Header from './Header'
import NoteList from './NoteList'
import SearchBar from './SearchBar'


function App() {
  const [notes, setNotes] = useState([])
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
