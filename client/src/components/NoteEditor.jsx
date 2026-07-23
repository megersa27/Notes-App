import '../styles/NoteEditor.css'

function NoteEditor() {
  return (
    <main className="note-editor">
      <div className="note-editor__header">
        <input
          type="text"
          className="note-editor__title"
          placeholder="Note title..."
        />
        <button className="note-editor__save-btn">Save</button>
      </div>
      <textarea
        className="note-editor__body"
        placeholder="Start writing your note..."
      ></textarea>
    </main>
  )
}

export default NoteEditor
