import React, { Component } from 'react';
import './RoundOverMessage.css';

class RoundOverMessage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}
	render() {
		return (
			<div>
				<h1>Congratulations!</h1>
				<p>Round 1 complete. Your Pigeon hatched!</p>
				<img src={this.props.pigeon} alt='pigeon' />
				<p>Press "Round 2" to move on the final round.</p>
				<button onClick={this.props.changingRound}>Round 2</button>
			</div>
		);
	}
}

export default RoundOverMessage;
