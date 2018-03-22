import React, { Component } from 'react';
import './Notes.css';


let saveToLocalStorage = function (arrayOfWrittenNotes) {
    localStorage.setItem("localStorageNotes", JSON.stringify(arrayOfWrittenNotes));
}


const NoteButton = (props) => {

    let button;
    if (props.showEditButton) {
        button = <div>
                    <button className="btn btn-success editNoteButton" onClick={props.updateNote.bind(this, props.noteIndex)}>
                    Update note
                    </button>
                    <button className="btn btn-danger cancelButton" onClick={props.cancelUpdateNote}>
                    Cancel
                    </button>
                </div>
    }
    else {
        button = <button className="btn btn-primary createNoteButton" onClick={props.createNote}>
            Create note
            </button>
    }

    return (
        <div>
            {button}
        </div>
    );
}

//Setup emtpy localStorage if there is none already for writtenNote initialState
if (localStorage.getItem("localStorageNotes") === null) {
    let emptyArray = [];
    localStorage.setItem("localStorageNotes", JSON.stringify(emptyArray));
}


class Note extends Component {
    static localStorageNotes = () => localStorage.getItem("localStorageNotes");

    static initialState = () => ({
        writtenNotes: JSON.parse(localStorage["localStorageNotes"]),
        noteInput: '',
        showEditButton: false,
        noteIndex: null
    });
    state = Note.initialState();

    createNote = () => {
        if (this.state.noteInput !== "") {
            let tempArray = this.state.writtenNotes.slice();
            tempArray.push(this.state.noteInput)

            this.setState(prevState => ({
                writtenNotes: tempArray,
                noteInput: '',
            }), () => {
                saveToLocalStorage(this.state.writtenNotes)
            });
        }
        this.noteInputTextArea.value = '';
    }

    updateNote = (index, event) => {

        let tempArray = this.state.writtenNotes;
        tempArray[index] = this.state.noteInput;

        this.setState(prevState => ({
            writtenNotes: tempArray
        }));

        saveToLocalStorage(this.state.writtenNotes);
    }

    cancelUpdateNote = () => {

        this.setState(prevState => ({
            showEditButton: false,
            noteInput: ''
        }));
        this.noteInputTextArea.value = '';
    }

    deleteNote = (index, event) => {
        let tempArray = this.state.writtenNotes;
        tempArray.splice(index, 1);

        this.setState(prevState => ({
            writtenNotes: tempArray
        }));

        saveToLocalStorage(this.state.writtenNotes);
    }

    editNote = (index, event) => {
        let noteText = this.state.writtenNotes[index];
        this.noteInputTextArea.value = noteText;
        this.noteInputTextArea.focus();

        this.setState(prevState => ({
            showEditButton: true,
            noteInput: noteText,
            noteIndex: index
        }));
    }

    handleChange = (event) => {
        event.persist();

        this.setState(prevState => ({
            noteInput: event.target.value
        }));
    }

    render() {

        const arrayOfNotes = this.state.writtenNotes.map((note, index) =>
            <div key={index} className="col-md-4">
                <div className="note">
                    <span className="editNote">
                        <i className="glyphicon glyphicon-pencil" onClick={this.editNote.bind(this, index)}></i>
                    </span>
                    <span className="close">
                        <i className="glyphicon glyphicon-remove" onClick={this.deleteNote.bind(this, index)}></i>
                    </span>
                    <p>{note}</p>
                </div>
            </div>
        );

        return (
            <div className="container">
                <h1>Your personal notes</h1>
                <hr />
                <div>{arrayOfNotes}</div>
                <textarea className="form-control note-text" ref={(ref) => this.noteInputTextArea = ref} onChange={this.handleChange} placeholder="Enter the text of your note here..." />
                <NoteButton createNote={this.createNote}
                    updateNote={this.updateNote}
                    cancelUpdateNote={this.cancelUpdateNote}
                    showEditButton={this.state.showEditButton}
                    noteIndex={this.state.noteIndex} />
            </div>
        );
    }
}

export class Notes extends Component {
    render() {
        return (
            <div>
                <Note />
            </div>
        );
    }
}