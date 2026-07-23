import NoteList from './NoteList'
import '../styles/Sidebar.css'

function Sidebar({ notes, selectedNote, onSelectNote, onNewNote }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <h3>My Notes</h3>
        <button className="sidebar__new-btn" onClick={onNewNote}>
          + New
        </button>
      </div>
      <div className="sidebar__search">
        <input type="text" placeholder="Search notes..." />
      </div>
      <NoteList
        notes={notes}
        selectedNote={selectedNote}
        onSelectNote={onSelectNote}
      />
    </aside>
  )
}

export default Sidebar
