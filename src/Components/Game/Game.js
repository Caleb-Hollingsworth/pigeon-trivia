import React, { Component } from 'react';
import './Game.css';
import data from '../../Apprentice_TandemFor400_Data.json';
import { render } from '@testing-library/react';
let answersCounter = 0;
let randomInsertIndex;
let gameQuestionCounter = 0;
let newArray = [];
let round = 1;
let question = 1;
let score = 0;

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answersArray: [],
			gameMessage: '',
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
			score = score + 1;
			question = question + 1;
			this.gameAnswers();
			console.log('yep');
			this.setState({ gameMessage: 'Correct!' });
			setTimeout(() => {
				this.setState({ gameMessage: '' });
			}, 2000);
		} else {
			this.setState({ gameMessage: 'Big NOPE...try again little fella...' });
			setTimeout(() => {
				this.setState({ gameMessage: '' });
			}, 2000);
		}
	};

	render() {
		console.log(this.state.answersArray);
		return (
			<div>
				<header>
					<div>Score: {score}</div>
					<div>Round: {round}</div>
				</header>
				<div>
					<img src={this.props.pigeon} alt='pigeon'></img>
				</div>
				<div>
					<h2>{this.state.gameMessage}</h2>
					<div>Question #{question}</div>
					{this.gameQuestion[gameQuestionCounter]}
				</div>
				<div>
					<button
						onClick={this.checkAnswers}
						value={this.state.answersArray[0]}>
						{this.state.answersArray[0]}
					</button>
					<button
						onClick={this.checkAnswers}
						value={this.state.answersArray[1]}>
						{this.state.answersArray[1]}
					</button>
					<button
						onClick={this.checkAnswers}
						value={this.state.answersArray[2]}>
						{this.state.answersArray[2]}
					</button>
					<button
						onClick={this.checkAnswers}
						value={this.state.answersArray[3]}>
						{this.state.answersArray[3]}
					</button>
				</div>
			</div>
		);
	}
}
export default Game;
