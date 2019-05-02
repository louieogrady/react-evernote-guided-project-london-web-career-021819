import React, { Component } from "react";

class NoteList extends Component {
  render() {
    return (
      <li onClick={() => {this.props.selectNote(this.props.note)}}>
        <h2>{this.props.note.title}</h2>
        <p> {this.props.note.body.substring(0, 20) + "..."}</p>
      </li>
    );
  }
}

export default NoteList;
