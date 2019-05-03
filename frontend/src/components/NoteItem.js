import React, { Component } from "react";

class NoteList extends Component {

  onClickEvent = () => {
    this.props.selectNote(this.props.note);

    this.props.selectedNote === this.props.note ? null : this.props.switchNoteEditorRenderCondition()
  }
  
  render() {
    return (
      <li onClick={() => {this.onClickEvent()}} >
        <h2>{this.props.note.title}</h2>
        <p> {this.props.note.body.length > 30 ? this.props.note.body.substring(0, 22) + "..." : this.props.note.body}</p>
      </li>
    );
  }
}

export default NoteList;



// onClick={(event) => this.props.switchNoteEditorRenderCondition()}
