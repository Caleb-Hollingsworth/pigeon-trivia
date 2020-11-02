import React, { Component } from 'react';
import './Game.css';
import RoundOverMessage from '../RoundOverMessage/RoundOverMessage';
import GameWonMessage from '../GameWonMessage/GameWonMessage';
import data from '../../Apprentice_TandemFor400_Data.json';
import { render } from '@testing-library/react';
let answersCounter = 0;
let randomInsertIndex;
let gameQuestionCounter = 0;
let newArray = [];
let roundCounter = 1;
let questionCounter = 1;
let score = 0;

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answersArray: [],
			gameMessage: '',
			roundOver: false,
			gameOver: false,
		};
	}
	componentDidMount() {
		this.gameAnswers();
	}
	//sets the game question
	gameQuestion = data.map((question) => {
		return (
			<div>
				<h1>{question.question}</h1>
			</div>
		);
	});
	//sets the game answer bank
	gameAnswers = () => {
		newArray = [];
		randomInsertIndex = Math.floor(Math.random() * 4);
		newArray.push(...data[answersCounter].incorrect);

		newArray.splice(randomInsertIndex, 0, data[answersCounter].correct);
		this.setState({ answersArray: newArray });
	};
	//checks to see if answer selection is correct or not
	checkAnswers = (event) => {
		if (event.target.value === data[answersCounter].correct) {
			gameQuestionCounter = gameQuestionCounter + 1;
			answersCounter = answersCounter + 1;
			score = score + 1;
			questionCounter = questionCounter + 1;
			this.changeRoundHandler();
			this.gameAnswers();
			this.setState({ gameMessage: 'Correct!' });
			setTimeout(() => {
				this.setState({ gameMessage: '' });
			}, 2000);
		} else if (questionCounter > 20) {
			this.setState({ gameOver: true });
		} else {
			this.setState({ gameMessage: 'Big NOPE...try again little fella...' });
			setTimeout(() => {
				this.setState({ gameMessage: '' });
			}, 2000);
		}
	};
	//changes the round
	changeRoundHandler() {
		if (questionCounter === 11) {
			this.setState({ roundOver: true });
			this.props.setRoundHandler();
			return (roundCounter = 2);
		}
	}
	changingRound = () => {
		this.setState({ roundOver: false });
	};

	//restarts the game
	restartGame = () => {
		window.location.reload();
	};

	render() {
		if (roundCounter === 2 && this.state.roundOver === true) {
			return (
				<RoundOverMessage
					changingRound={this.changingRound}
					pigeon={this.props.pigeon}
				/>
			);
		} else if (
			roundCounter === 2 &&
			questionCounter > 20 &&
			this.state.gameOver === true
		) {
			return <GameWonMessage restartGame={this.restartGame} />;
		} else {
			return (
				<div>
					<header>
						<div>Score: {score}</div>
						<div>Round: {roundCounter}</div>
					</header>
					<main>
						<div>
							<img src={this.props.pigeon} alt='pigeon'></img>
						</div>
						<div>
							<h2>{this.state.gameMessage}</h2>
							<div>Question #{questionCounter}</div>
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
					</main>
				</div>
			);
		}
	}
}
export default Game;
