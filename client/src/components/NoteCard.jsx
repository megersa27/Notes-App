import '../styles/NoteCard.css'

function NoteCard({ note, isSelected, onSelect }) {
  return (
    <div
      className={`note-card ${isSelected ? 'note-card--active' : ''}`}
      onClick={() => onSelect(note)}
    >
      <h4 className="note-card__title">{note.title}</h4>
      <p className="note-card__preview">
        {note.content ? note.content.substring(0, 60) + '...' : 'No content'}
      </p>
      <span className="note-card__date">{note.date}</span>
    </div>
  )
}

export default NoteCard
