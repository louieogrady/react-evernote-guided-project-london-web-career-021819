import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';


class Content extends Component {

  state = {
    noteEditorRenderCondition: false
  }

  switchNoteEditorRenderCondition = () => {
    this.setState({
      noteEditorRenderCondition: !this.state.noteEditorRenderCondition
    });
  };

  // patch note function
  patchEdit = (note.id, title, body, event) => {
    event.persist();
    event.preventDefault();

    fetch(`http//localhost:3000/api/v1/notes/${note.id}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: note.id,
        x: x,

      })
    })

  }

  renderContent = () => {

    const renderCondition = !!this.props.selectedNote

    if (this.state.noteEditorRenderCondition === true) {
      return <NoteEditor selectedNote={this.props.selectedNote} switchNoteEditorRenderCondition={this.switchNoteEditorRenderCondition}/>;
    } else if (renderCondition === true) {
      return <NoteViewer selectedNote={this.props.selectedNote} switchNoteEditorRenderCondition={this.switchNoteEditorRenderCondition}/>;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }

}

export default Content;


/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
