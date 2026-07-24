import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import NoteEditor from '../components/NoteEditor'
import '../styles/Home.css'

function generateId() {
  return Date.now().toString()
}

const initialNotes = [
  {
    id: '1',
    title: 'Welcome to Notes App',
    content: 'This is your first note. Click any note to edit it, or click + New to create one.',
    tags: ['welcome'],
    date: new Date().toLocaleDateString(),
  },
  {
    id: '2',
    title: 'Shopping List',
    content: 'Milk, eggs, bread, butter.',
    tags: ['personal'],
    date: new Date().toLocaleDateString(),
  },
  {
    id: '3',
    title: 'React Learning',
    content: 'useState, useEffect, props, components, React Router.',
    tags: ['learning', 'react'],
    date: new Date().toLocaleDateString(),
  },
]

function Home() {
  // Load notes from localStorage on first render, fall back to initialNotes
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes')
    return saved ? JSON.parse(saved) : initialNotes
  })

  const [selectedNote, setSelectedNote] = useState(null)
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState(null)

  // Set first note as selected after initial load
  useEffect(() => {
    if (notes.length > 0 && !selectedNote) {
      setSelectedNote(notes[0])
    }
  }, [])

  // Save notes to localStorage every time notes array changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  // --- Derived state: filter notes based on search and activeTag ---
  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())

    const matchesTag = activeTag ? note.tags.includes(activeTag) : true

    return matchesSearch && matchesTag
  })

  // --- Collect all unique tags from all notes ---
  const allTags = [...new Set(notes.flatMap((note) => note.tags))]

  // --- Handlers ---
  function handleSelectNote(note) {
    setSelectedNote(note)
  }

  function handleNewNote() {
    const newNote = {
      id: generateId(),
      title: 'Untitled Note',
      content: '',
      tags: [],
      date: new Date().toLocaleDateString(),
    }
    setNotes([newNote, ...notes])
    setSelectedNote(newNote)
    setSearch('')       // clear search so new note is visible
    setActiveTag(null)  // clear tag filter
  }

  function handleSaveNote(updatedNote) {
    setNotes(notes.map((n) => (n.id === updatedNote.id ? updatedNote : n)))
    setSelectedNote(updatedNote)
  }

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
          notes={filteredNotes}
          allTags={allTags}
          activeTag={activeTag}
          search={search}
          selectedNote={selectedNote}
          onSelectNote={handleSelectNote}
          onNewNote={handleNewNote}
          onSearch={setSearch}
          onTagClick={setActiveTag}
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
