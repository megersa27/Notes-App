import NoteCard from './NoteCard'

function NoteList({ notes, selectedNote, onSelectNote }) {
  if (notes.length === 0) {
    return (
      <div className="note-list--empty">
        <p>No notes yet.</p>
        <p>Click + New to create one.</p>
      </div>
    )
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          isSelected={selectedNote?.id === note.id}
          onSelect={onSelectNote}
        />
      ))}
    </div>
  )
}

export default NoteList
