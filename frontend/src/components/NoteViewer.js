import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{this.props.selectedNote.title}</h2>
      <p>{this.props.selectedNote.body}</p>
      <button>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
//
// // this.props.selectedNote.body
