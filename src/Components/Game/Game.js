import React, { Component } from 'react';
import './Game.css';
import data from '../../Apprentice_TandemFor400_Data.json';
import { render } from '@testing-library/react';
let answersCounter = 0;
let randomInsertIndex;
let gameQuestionCounter = 0;
let newArray = [];

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answersArray: [],
		};
	}
	componentDidMount() {
		console.log('hoooo');
		this.gameAnswers();
	}

	gameQuestion = data.map((question) => {
		return (
			<div>
				<h1>{question.question}</h1>
			</div>
		);
	});

	gameAnswers = () => {
		newArray = [];
		randomInsertIndex = Math.floor(Math.random() * 4);
		newArray.push(...data[answersCounter].incorrect);

		newArray.splice(randomInsertIndex, 0, data[answersCounter].correct);
		this.setState({ answersArray: newArray });
		console.log(this.state.answersArray);
	};

	checkAnswers = (event) => {
		if (event.target.value === data[answersCounter].correct) {
			console.log('working...');
			gameQuestionCounter = gameQuestionCounter + 1;
			answersCounter = answersCounter + 1;
			this.gameAnswers();
			console.log('yep');
		} else {
			console.log('nope');
		}
	};

	render() {
		console.log(this.state.answersArray);
		return (
			<div>
				<div>
					<img src={this.props.pigeon} alt='pigeon'></img>
				</div>
				<div>{this.gameQuestion[gameQuestionCounter]}</div>
				<button onClick={this.checkAnswers} value={this.state.answersArray[0]}>
					{this.state.answersArray[0]}
				</button>
				<button onClick={this.checkAnswers} value={this.state.answersArray[1]}>
					{this.state.answersArray[1]}
				</button>
				<button onClick={this.checkAnswers} value={this.state.answersArray[2]}>
					{this.state.answersArray[2]}
				</button>
				<button onClick={this.checkAnswers} value={this.state.answersArray[3]}>
					{this.state.answersArray[3]}
				</button>
			</div>
		);
	}
}
export default Game;
