import React, { Component } from 'react';
import './MazingContest.css';



const MazingHeader = (props) => {
    return (
        <div>
            <h1>Mazing Contest</h1>
            <hr />
            <h2>Try to make the maze as complex as possible.</h2>
            <h3 className="availableTowers">Available towers: {props.availableTowers}</h3>
        </div>
        );
}

const GameGrid = (props) => {

    let grid = []; 

    for (let i = 0; i < 171; i++) {
        grid.push(<div className="grid-item" key={i} onClick={props.placeTower.bind(this, i)}></div>);
    }

    return (
        <div className="gameGrid">
            {grid}
        </div>
    );
}

export class MazingContest extends Component {

    constructor() {
        super();
        this.state = {
            availableTowers: 15,
        }
    }

    placeTower = (index, event) => {
        if (this.state.availableTowers !== 0) {
            if (event.target.className !== "grid-item usedSpace") {
                event.target.className = "grid-item usedSpace";

                this.setState({
                    availableTowers: this.state.availableTowers - 1,
                })
            }
            else {
                event.target.className = "grid-item";

                this.setState({
                    availableTowers: this.state.availableTowers + 1,
                })
            }
        }
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    <MazingHeader availableTowers={this.state.availableTowers} />
                    <GameGrid placeTower={this.placeTower} />
                </div>
            </div>
        );
    }
}