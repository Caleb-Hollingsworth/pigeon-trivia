import React, { Component, useEffect } from 'react';
import './Game.css';
import data from '../../Apprentice_TandemFor400_Data.json';
import { render } from '@testing-library/react';
let answersCounter = 0;
let randomInsertIndex;

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answersArray: [],
		};
	}
	componentDidMount() {
		randomInsertIndex = Math.floor(Math.random() * 3);
		return this.gameAnswers();
	}
	gameQuestion = data.map((question) => {
		return (
			<div>
				<h1>{question.question}</h1>
			</div>
		);
	});
	gameAnswers = () => {
		this.state.answersArray.push(...data[answersCounter].incorrect);
		this.state.answersArray.splice(
			randomInsertIndex,
			0,
			data[answersCounter].correct
		);
	};

	render() {
		return (
			<div>
				<div>
					<img src={this.props.pigeon} alt='pigeon'></img>
				</div>
				<div>{this.gameQuestion[0]}</div>
				<button>{this.state.answersArray[0]}</button>
				<button>{this.state.answersArray[1]}</button>
				<button>{this.state.answersArray[2]}</button>
				<button>{this.state.answersArray[3]}</button>
			</div>
		);
	}
}
export default Game;
