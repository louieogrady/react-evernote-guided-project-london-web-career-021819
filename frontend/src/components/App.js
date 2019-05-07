import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {

  state = {
    notes: [],
    selectedNote: null,
    searchTerm: "",
    searchTermBody: ""
  }

  fetchNotes = () => {
    fetch('http://localhost:3000/api/v1/notes')
    .then(resp => resp.json())
    .then(notes => this.setState({notes: notes}))
  }

  renderNewNote = (newNote) => {
    this.setState({
      notes: [...this.state.notes, newNote]
    })
  }

  updateNotesAfterDelete = (deletedNote) => {
  const updatedNotes = this.state.notes.filter(note => note.id !== deletedNote.noteId)

    this.setState({
      notes: updatedNotes
    })
  }

  clearSelectedNote = () => {
    this.setState({
      selectedNote: null
    })
  }

  sortedByTimeCreated = () => {
    this.state.notes.sort((noteA, noteB) => {
      if (noteA.id > noteB.id) return -1;
      return 1;
    })
  }

  // ensures note is rendered immediately - checks whether the updated note has the same id as one of the notes in the array and if it assigns
  // the patched info to it, if not it keeps the details of the old notes
  renderUpdatedNote = (newNote) => {
    const newNotes = this.state.notes.map(note => note.id === newNote.id ? note = newNote : note )

    this.setState({
      notes: newNotes,
      selectedNote: newNote   // this adds the newNote into the selectedNote so that when the re-render happens (and the conditional rendering is switched) the new note is shown rather than the old one
    })

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

  searchInputBody = (event) => {
    this.setState({
      searchTermBody: event.target.value
    })
  }


  //filteredNotes = () => this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  filteredNotes = () => {
    if (this.state.searchTerm !== "") {
      return this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    } else if (this.state.searchTermBody !== "") {
      return this.state.notes.filter(note => note.body.toLowerCase().includes(this.state.searchTermBody.toLowerCase()))
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer notes={this.state.searchTerm || this.state.searchTermBody ? this.filteredNotes() : this.state.notes} selectNote={this.selectNote} selectedNote={this.state.selectedNote} searchInput={this.searchInput} renderNewNote={this.renderNewNote} renderUpdatedNote={this.renderUpdatedNote} deleteNote={this.deleteNote} updateNotesAfterDelete={this.updateNotesAfterDelete} clearSelectedNote={this.clearSelectedNote} sortedByTimeCreated={this.sortedByTimeCreated} searchInputBody={this.searchInputBody}/>
      </div>
    );
  }

}

export default App;
