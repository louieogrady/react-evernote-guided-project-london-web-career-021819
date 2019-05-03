import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    noteEditorRenderCondition: false
  }

  switchNoteEditorRenderCondition = () => {
    this.setState({
      noteEditorRenderCondition: !this.state.noteEditorRenderCondition
    });
  };

  render() {
    return (
      <Fragment>
        <Search searchInput={this.props.searchInput}/>
        <div className='container'>
          <Sidebar notes={this.props.notes} selectNote={this.props.selectNote} selectedNote={this.props.selectedNote} renderNewNote={this.props.renderNewNote} switchNoteEditorRenderCondition={this.switchNoteEditorRenderCondition} />
          <Content noteEditorRenderCondition={this.state.noteEditorRenderCondition} switchNoteEditorRenderCondition={this.switchNoteEditorRenderCondition} selectedNote={this.props.selectedNote} renderUpdatedNote={this.props.renderUpdatedNote} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
