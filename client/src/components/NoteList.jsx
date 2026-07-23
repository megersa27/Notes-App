import NoteCard from './NoteCard'

// Temporary fake data so we can see the UI
const sampleNotes = [
  { id: 1, title: 'My First Note', content: 'This is the content of my first note.', date: '2024-01-15' },
  { id: 2, title: 'Shopping List', content: 'Milk, eggs, bread, butter.', date: '2024-01-16' },
  { id: 3, title: 'React Learning', content: 'Learn useState, useEffect, components.', date: '2024-01-17' },
]

function NoteList() {
  return (
    <div className="note-list">
      {sampleNotes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  )
}

export default NoteList
