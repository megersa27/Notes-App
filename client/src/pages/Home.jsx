import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import NoteEditor from '../components/NoteEditor'
import '../styles/Home.css'

// Helper to generate a simple unique id
function generateId() {
  return Date.now().toString()
}

// Initial sample notes so the app isn't empty on first load
const initialNotes = [
  {
    id: '1',
    title: 'Welcome to Notes App',
    content: 'This is your first note. Click any note to edit it, or click + New to create one.',
    date: new Date().toLocaleDateString(),
  },
  {
    id: '2',
    title: 'Shopping List',
    content: 'Milk, eggs, bread, butter.',
    date: new Date().toLocaleDateString(),
  },
]

function Home() {
  // All notes stored here
  const [notes, setNotes] = useState(initialNotes)

  // Which note is currently selected/being edited
  const [selectedNote, setSelectedNote] = useState(initialNotes[0])

  // --- Handlers ---

  // Called when user clicks a note in the sidebar
  function handleSelectNote(note) {
    setSelectedNote(note)
  }

  // Called when user clicks "+ New" button
  function handleNewNote() {
    const newNote = {
      id: generateId(),
      title: 'Untitled Note',
      content: '',
      date: new Date().toLocaleDateString(),
    }
    setNotes([newNote, ...notes])   // add to beginning of list
    setSelectedNote(newNote)         // open it in the editor
  }

  // Called when user clicks "Save" in the editor
  function handleSaveNote(updatedNote) {
    setNotes(notes.map((n) => (n.id === updatedNote.id ? updatedNote : n)))
    setSelectedNote(updatedNote)
  }

  // Called when user clicks "Delete" in the editor
  function handleDeleteNote(noteId) {
    const remaining = notes.filter((n) => n.id !== noteId)
    setNotes(remaining)
    setSelectedNote(remaining.length > 0 ? remaining[0] : null)
  }

  return (
    <div className="home">
      <Navbar />
      <div className="home__body">
        <Sidebar
          notes={notes}
          selectedNote={selectedNote}
          onSelectNote={handleSelectNote}
          onNewNote={handleNewNote}
        />
        <NoteEditor
          note={selectedNote}
          onSave={handleSaveNote}
          onDelete={handleDeleteNote}
        />
      </div>
    </div>
  )
}

export default Home
