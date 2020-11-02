import React, { setState } from 'react';
import './RoundOverMessage.css';

const RoundOverMessage = (props) => {
	return (
		<div>
			<h1>Congratulations!</h1>
			<p>Round 1 complete. Press "Round 2" to move on the final round.</p>
			<button onClick={props.changingRound}>Round 2</button>
		</div>
	);
};

export default RoundOverMessage;
