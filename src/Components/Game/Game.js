import React from 'react';
import './Game.css';
import data from '../../Apprentice_TandemFor400_Data.json';
let answersCounter = 0;
let answersArray = [];
const Game = (props) => {
	const gameQuestion = data.map((question) => {
		return (
			<div>
				<h1>{question.question}</h1>
			</div>
		);
	});
	const gameAnswers = () => {
		data[answersCounter].incorrect.push(data[answersCounter].correct);
		answersArray.push(data[answersCounter].incorrect);

		return console.log(answersArray);
	};

	const populateAnswers = () => {
		for (let i = 0; i < answersArray.length; i++) {
			console.log(answersArray[i]);
		}
	};
	return (
		<div>
			<div>
				<img src={props.pigeon} alt='pigeon'></img>
			</div>
			<div>{gameQuestion[0]}</div>
			<div>{populateAnswers}</div>
			<button onClick={gameAnswers}>yo</button>
			<button onClick={populateAnswers}>click</button>
		</div>
	);
};

export default Game;
