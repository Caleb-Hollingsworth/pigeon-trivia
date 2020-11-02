import React from 'react';

const GameWonMessage = (props) => {
	return (
		<div>
			<div>
				<h1>Congratulations!</h1>
				<p>You won! You're pigeon has grown large and Strong!</p>
				<p>Click "Play Again" to restart the game.</p>
				<button onClick={props.restartGame}>Play Again</button>
			</div>
		</div>
	);
};

export default GameWonMessage;
