import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {

  state = {
    notes: [],
    selectedNote: null
  }

  fetchNotes = () => {
    fetch('http://localhost:3000/api/v1/notes')
    .then(resp => resp.json())
    .then(notes => this.setState({notes: notes}))
  }

  componentDidMount() {
    this.fetchNotes()
  }

  // takes note from onClick event handler and places it in this component's state
  selectNote = (note) => {
    this.setState({
      selectedNote: note
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer notes={this.state.notes} selectNote={this.selectNote} selectedNote={this.state.selectedNote}/>
      </div>
    );
  }
}

export default App;
