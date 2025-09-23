//import { useState } from 'react'
import '../styles/App.css'
import Header from './Header'
import Footer from './Footer'
import NoteList from './NoteList'

function App() {
  const notes = [{title: "aa", content: "wujuuuuuu"}, {title: "aa", content: "wujuuuuuu"},
    {title: "aa", content: "wujuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"}, {title: "aa", content: "wujuuuuuu"}, {title: "aa", content: "wujuuuuuu"}]

  return (
    <div className='App'>
    <Header/>
    <NoteList
      notes = {notes}
    />
    <Footer/>
    </div>
  )
}

export default App
