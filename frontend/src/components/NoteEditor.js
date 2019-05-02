import React, { Component } from 'react';

class NoteEditor extends Component {
  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" defaultValue={this.props.selectedNote.title}/>
        <textarea name="body" defaultValue={this.props.selectedNote.body}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={() => this.props.switchNoteEditorRenderCondition()} >Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
