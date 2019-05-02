import React, {Component} from 'react';
import NoteItem from './NoteItem';

class NoteList extends Component {
  render() {
    return (
    <ul>
      {/* Render list of notes here... */}
      {this.props.notes.map(note => <NoteItem note={note} key={note.id} selectNote={this.props.selectNote}    /> )}
    </ul>
  );
}
}

export default NoteList;
