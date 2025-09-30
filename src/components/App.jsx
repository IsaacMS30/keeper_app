import { useState } from 'react'
import '../styles/App.css'
import CreateArea from './CreateArea'
import Footer from './Footer'
import Header from './Header'
import NoteList from './NoteList'
import SearchBar from './SearchBar'


function App() {
  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes([...notes, newNote])
  }

  return (
    <div className='App'>
    <Header/>
    <CreateArea
      onAdd = {addNote}
    />
    <SearchBar/>
    {notes.length === 0 && <h5>No notes to show, create one!</h5> }
    {notes.length > 0 && <NoteList
      notes = {notes}
      setNotes = {setNotes}
    />}
    <Footer/>
    </div>
  )
}

export default App
