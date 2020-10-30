import React from 'react';
import './Home.css';
import BluePigeon from '../../Images/Pigeon/BluePigeon.png';
import RedPigeon from '../../Images/Pigeon/Red-Pigeon.png';
import GreenPigeon from '../../Images/Pigeon/GreenPigeon.png';

const Home = (props) => {
	return (
		<div>
			<header>
				<h1>Welcome to Pigeon Trivia</h1>
				<h2>Choose your Pigeon to play</h2>
			</header>
			<main className='main'>
				<button
					className='blue pigeon'
					onClick={() => props.setPigeonHandler(BluePigeon)}>
					<img src={BluePigeon} alt='blue pigeon' />
				</button>
				<button
					className='red pigeon'
					onClick={() => props.setPigeonHandler(RedPigeon)}>
					<img src={RedPigeon} alt='red pigeon' />
				</button>
				<button
					className='green pigeon'
					onClick={() => props.setPigeonHandler(GreenPigeon)}>
					<img src={GreenPigeon} alt='green pigeon' />
				</button>
			</main>
		</div>
	);
};

export default Home;
