import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {

  state = {
    notes: [],
    selectedNote: null,
    searchTerm: null
  }

  //
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

  searchInput = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  filteredNotes = () => this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer notes={this.state.searchTerm ? this.filteredNotes() : this.state.notes} selectNote={this.selectNote} selectedNote={this.state.selectedNote} searchInput={this.searchInput}/>
      </div>
    );
  }
}

export default App;

// this.state.searchTerm ? this.filteredNotes : this.state.notes
