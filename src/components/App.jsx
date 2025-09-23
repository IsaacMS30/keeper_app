import { useState } from 'react'
import '../styles/App.css'
import Header from './Header'
import Footer from './Footer'
import NoteList from './NoteList'

function App() {
  const [notes, setNotes] = useState([{title: "hola", content: "hellooooooo"}])

  return (
    <div className='App'>
    <Header/>
    <NoteList
      notes = {notes}
      setNotes = {setNotes}
    />
    <Footer/>
    </div>
  )
}

export default App
