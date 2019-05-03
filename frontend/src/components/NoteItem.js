import React, { Component } from "react";

class NoteList extends Component {
  render() {
    return (
      <li onClick={() => {this.props.selectNote(this.props.note)}}>
        <h2>{this.props.note.title}</h2>
        <p> {this.props.note.body.length > 30 ? this.props.note.body.substring(0, 22) + "..." : this.props.note.body}</p>
      </li>
    );
  }
}

export default NoteList;


//this.props.note.body.substring > 20 ? this.props.note.body.substring(0, 20) + "..." : this.props.note.body
