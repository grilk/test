import React, { Component } from 'react';
import './StarGame.css';

const Stars = (props) => {

    let stars = [];
    for (let i = 0; i < props.numberOfStars; i++) {
        stars.push(<i key={i} className="glyphicon glyphicon-star"></i>)
    }

    return (
        <div className="col-lg-5">
            {stars}
        </div>
    );
}

const Button = (props) => {
    let button;
    switch (props.answerIsCorrect) {
        case true:
            button = <button className="btn btn-success" onClick={props.acceptAnswer}>
                <i className="glyphicon glyphicon-check"></i>
            </button>
            break;
        case false:
            button = <button className="btn btn-danger">
                <i className="glyphicon glyphicon-times"></i>
            </button>
            break;
        default:
            button = <button className="btn"
                onClick={props.checkAnswer}
                disabled={props.selectedNumbers.length === 0}>
                =
			</button>
            break;
    }
    return (
        <div className="col-lg-2 text-center">
            {button}
            <br /><br />
            <button className="btn btn-warning btn-sm" onClick={props.redraw}>
                <i className="glyphicon glyphicon-refresh"></i>
            </button>
        </div>
    );
}

const Answer = (props) => {
    return (
        <div className="col-lg-5">
            {props.selectedNumbers.map((number, i) =>
                <span key={i} onClick={() => props.unselectNumber(number)}>
                    {number}
                </span>
            )}
        </div>
    );
}

const Numbers = (props) => {
    const numberClassName = (number) => {
        if (props.usedNumbers.indexOf(number) >= 0) {
            return 'used';
        }
        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected';
        }
    }
    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) =>
                    <span key={i} className={numberClassName(number)}
                        onClick={() => props.selectNumber(number)}>
                        {number}
                    </span>
                )}
            </div>
        </div>
    );
}
Numbers.list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Game extends React.Component {
    state = {
        selectedNumbers: [],
        randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
        usedNumbers: [],
        answerIsCorrect: null,
    };

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    }

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers
                .filter(number => number !== clickedNumber)
        }));
    }

    checkAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.randomNumberOfStars ===
            prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }));
    }

    acceptAnswer = () => {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            answerIsCorrect: null,
            randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
        }));
    }

    redraw = () => {
        this.setState({
            randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
            answerIsCorrect: null,
            selectedNumbers: [],
        });
    }

    render() {
        const {
				selectedNumbers,
            randomNumberOfStars,
            answerIsCorrect,
            usedNumbers,
			} = this.state;
        return (
            <div className="container">
                <h3>Play nine</h3>
                <hr />
                <div className="row">
                    <Stars numberOfStars={randomNumberOfStars} />

                    <Button selectedNumbers={selectedNumbers}
                        checkAnswer={this.checkAnswer}
                        acceptAnswer={this.acceptAnswer}
                        redraw={this.redraw}
                        answerIsCorrect={answerIsCorrect} />

                    <Answer selectedNumbers={selectedNumbers}
                        unselectNumber={this.unselectNumber} />
                </div>
                <br />
                <Numbers selectedNumbers={selectedNumbers}
                    selectNumber={this.selectNumber}
                    usedNumbers={usedNumbers} />
            </div>
        )
    }
}

export class StarGame extends Component {
    render() {
        return (
            <div>
                <Game />
            </div>
        );
    }
}

//export default StarGame;
