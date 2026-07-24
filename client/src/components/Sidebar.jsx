import NoteList from './NoteList'
import '../styles/Sidebar.css'

function Sidebar({
  notes,
  allTags,
  activeTag,
  search,
  selectedNote,
  onSelectNote,
  onNewNote,
  onSearch,
  onTagClick,
}) {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <h3>My Notes <span className="sidebar__count">{notes.length}</span></h3>
        <button className="sidebar__new-btn" onClick={onNewNote}>
          + New
        </button>
      </div>

      {/* Search input */}
      <div className="sidebar__search">
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
        {search && (
          <button className="sidebar__clear-search" onClick={() => onSearch('')}>
            ✕
          </button>
        )}
      </div>

      {/* Tag filters */}
      {allTags.length > 0 && (
        <div className="sidebar__tags">
          <button
            className={`tag ${activeTag === null ? 'tag--active' : ''}`}
            onClick={() => onTagClick(null)}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`tag ${activeTag === tag ? 'tag--active' : ''}`}
              onClick={() => onTagClick(activeTag === tag ? null : tag)}
            >
              #{tag}
            </button>
          ))}
        </div>
      )}

      <NoteList
        notes={notes}
        selectedNote={selectedNote}
        onSelectNote={onSelectNote}
      />
    </aside>
  )
}

export default Sidebar
