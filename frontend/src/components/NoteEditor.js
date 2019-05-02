import React, { Component } from 'react';

class NoteEditor extends Component {
  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" defaultValue={this.props.selectedNote.title}/>
        <textarea name="body" defaultValue={this.props.selectedNote.body}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" onClick={(event) => this.props.switchPatchEdit(this.props.selectedNote.id, event.target.name.value, event.target.body.value)}/>
          <button type="button" onClick={() => this.props.switchNoteEditorRenderCondition()} >Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;


//onSubmit={this.props.patchEdit}

// if we cannot get the value from the event.target - then lets setup state and assign an onchange to the inputs and put the input into state - send that state back to the content container for posting to the api
