import React, { useState } from 'react';
import EggAndPigeon from './Components/EggAndPigeon/EggAndPigeon';
import BlueEgg from './Images/Eggs/egg-blue.png';
import RedEgg from './Images/Eggs/red-egg.png';
import GreenEgg from './Images/Eggs/green-egg.png';
import BluePigeon from './Images/Pigeon/BluePigeon.png';
import RedPigeon from './Images/Pigeon/Red-Pigeon.png';
import GreenPigeon from './Images/Pigeon/GreenPigeon.png';
import Game from './Components/Game/Game';
import Home from './Components/Home/Home';
import './App.css';

function App() {
	//pigeon selection
	const [pigeon, setPigeon] = useState(false);
	//display game
	const [displayGame, setDisplayGame] = useState(false);
	//set round
	const [round, setRound] = useState(1);
	//setPigeon handler function
	const setPigeonHandler = (pigeon) => {
		if (round === 1) {
			pigeon === BluePigeon
				? setPigeon(BlueEgg)
				: pigeon === RedPigeon
				? setPigeon(RedEgg)
				: setPigeon(GreenEgg);
		}
		setDisplayGame(true);
	};
	const setRoundHandler = () => {
		setRound(2);
		pigeon === BlueEgg
			? setPigeon(BluePigeon)
			: pigeon === RedEgg
			? setPigeon(RedPigeon)
			: setPigeon(GreenPigeon);
	};

	return (
		<div className='App'>
			{displayGame === false && <Home setPigeonHandler={setPigeonHandler} />}
			{/* <EggAndPigeon /> */}
			{displayGame === true && (
				<Game pigeon={pigeon} setRoundHandler={setRoundHandler} />
			)}
		</div>
	);
}

export default App;
