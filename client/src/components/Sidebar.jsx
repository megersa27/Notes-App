import NoteList from './NoteList'
import '../styles/Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <h3>My Notes</h3>
        <button className="sidebar__new-btn">+ New</button>
      </div>
      <div className="sidebar__search">
        <input type="text" placeholder="Search notes..." />
      </div>
      <NoteList />
    </aside>
  )
}

export default Sidebar
