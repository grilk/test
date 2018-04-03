import React, { Component } from 'react';
import './MazingContest.css';



const MazingHeader = () => {
    return (
        <div>
            <h1>Mazing Contest</h1>
            <hr />
            <h2>Try to make the maze as complex as possible.</h2>
        </div>
        );
}

const GameGrid = (props) => {
    //Create a grid based upon numberOfSquares state here. 

    return (
        <div className="gameGrid"> 
            
        </div>
    );
}

export class MazingContest extends Component {

    constructor() {
        super();
        this.state = {
            numberOfSquares: 24,
        }
    }

    render() {
        return (
            <div className="container">
                <MazingHeader />
                <GameGrid numberOfSquares={this.state.numberOfSquares} />
            </div>
        );
    }
}