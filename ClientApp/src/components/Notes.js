import React, { Component } from 'react';
import './Notes.css';


class CreateNote extends Component {

    constructor() {
        super();
        this.state = { isModalVisible: false };
    }

    showModal() {
        this.setState({
            isModalVisible: true
        });
    }

    hideModal() {
        this.setState({
            isModalVisible: false
        });
    }

    render() {

        const modal = this.state.isModalVisible ?
            <div id="myModal" className="noteModal">
                <div className="modal-content">
                    <span className="close">
                        <i className="glyphicon glyphicon-remove" onClick={() => this.hideModal()}></i>
                    </span>
                    <form>
                        <div className="note-title col-md-12">
                            <input type="text" className="form-control" placeholder="Enter the title of your note here..." />
                        </div>
                        <div className="note-text col-md-12">
                            <textarea className="form-control" placeholder="Enter the text of your note here..." />
                        </div>
                    </form>
                </div>
            </div>
            :
            "";

        return (
            <div>
                <button className="btn btn-primary" onClick={() => this.showModal()}>
                    Create new note
                </button>
                {modal}
            </div>
        );
    }
}


class Note extends Component {

    render() {
        return (
            <div className="container">
                <h1>Your personal notes</h1>
                <hr />
                <CreateNote />
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