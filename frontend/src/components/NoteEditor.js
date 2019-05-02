import React, { Component } from 'react';

class NoteEditor extends Component {

  state = {
    title: this.props.selectedNote.title,
    body: this.props.selectedNote.body,
    selectedNote: this.props.selectedNote
  }

  // patch note function
  patchEdit = (selectedNote, event) => {
    event.persist();
    event.preventDefault();

    fetch(`http//localhost:3000/api/v1/notes/${this.props.selectedNote.id}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body
      })
    })
  }

  handleChange = (event) => {
    // debugger
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log("state was set"))
  }


  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" value={this.state.title} onChange={event => this.handleChange(event)}/>
        <textarea name="body"  value={this.state.body} onChange={event => this.handleChange(event)}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" onClick={() => this.PatchEdit(this.props.selectedNote)}/>
          <button type="button" onClick={(event) => this.props.switchNoteEditorRenderCondition()} >Cancel</button>
        </div>
      </form>
    );
  }

}

export default NoteEditor;
