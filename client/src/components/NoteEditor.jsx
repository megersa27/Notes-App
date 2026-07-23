import { useState, useEffect } from 'react'
import '../styles/NoteEditor.css'

function NoteEditor({ note, onSave, onDelete }) {
  // Local state for what's currently typed in the editor
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  // When a different note is selected, load its data into the editor
  useEffect(() => {
    if (note) {
      setTitle(note.title)
      setContent(note.content)
    }
  }, [note]) // runs every time 'note' prop changes

  function handleSave() {
    if (!note) return
    onSave({
      ...note,        // keep id and date
      title,          // updated title
      content,        // updated content
    })
  }

  function handleDelete() {
    if (!note) return
    const confirmed = window.confirm('Delete this note?')
    if (confirmed) {
      onDelete(note.id)
    }
  }

  // Show a message if no note is selected
  if (!note) {
    return (
      <main className="note-editor note-editor--empty">
        <p>Select a note or create a new one</p>
      </main>
    )
  }

  return (
    <main className="note-editor">
      <div className="note-editor__header">
        <input
          type="text"
          className="note-editor__title"
          placeholder="Note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="note-editor__actions">
          <button className="note-editor__save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="note-editor__delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <textarea
        className="note-editor__body"
        placeholder="Start writing your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
    </main>
  )
}

export default NoteEditor
