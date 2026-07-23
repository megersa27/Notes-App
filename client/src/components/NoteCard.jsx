import '../styles/NoteCard.css'

function NoteCard({ note }) {
  return (
    <div className="note-card">
      <h4 className="note-card__title">{note.title}</h4>
      <p className="note-card__preview">{note.content.substring(0, 60)}...</p>
      <span className="note-card__date">{note.date}</span>
    </div>
  )
}

export default NoteCard
