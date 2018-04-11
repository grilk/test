import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class NumpadTrainer extends Component {
    constructor() {
        super();
        this.updateValues = this.updateValues.bind(this);
        this.state = {
            currentNumber: this.getRandomInt(70000, 76000),
            correctAnswers: [],
            incorrectAnswers: [],
            //time: new Date().toLocaleString()
        };
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    isMatch(expectedValue, actualValue) {
        return expectedValue == actualValue;
    }

    //startTimer() {

    //}

    //stopTimer() {

    //}

    updateValues() {
        var state = this.state;
        var typedValue = this.refs.typedvalue.value;
        var isMatch = this.isMatch(state.currentNumber, typedValue);

        if (isMatch) {
            state.correctAnswers.push(typedValue);
        } else {
            state.incorrectAnswers.push(typedValue);
        }
        
        state.currentNumber = this.getRandomInt(74010, 76297);

        this.setState(state);
        this.refs.typedvalue.value = "";
    }

    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.updateValues();
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.currentNumber}</h2>
                <input ref="typedvalue" type="text" placeholder="Fyll i matchande värde" onKeyPress={(e) => this.handleKeyPress(e)} />
                <h3>Antal rätt: {this.state.correctAnswers.length}</h3>
                <h3>Antal fel: {this.state.incorrectAnswers.length}</h3>
                <h3>Snabbaste tid: {this.state.time}</h3>
            </div>);
    }
}