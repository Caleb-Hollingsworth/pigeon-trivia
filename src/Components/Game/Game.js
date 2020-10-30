import React from 'react';
import './Game.css';

const Game = (props) => {
	return (
		<div>
			<div>
				Pigeon:<img src={props.pigeon} alt='pigeon'></img>
			</div>
		</div>
	);
};

export default Game;
