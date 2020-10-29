import React, { useState } from 'react';
import EggAndPigeon from './Components/EggAndPigeon/EggAndPigeon';
import Game from './Components/Game/Game';
import Home from './Components/Home/Home';
import './App.css';

function App() {
	//pigeon selection
	const [pigeon, setPigeon] = useState(false);
	const [displayGame, setDisplayGame] = useState(false);
	const setPigeonHandler = (pigeon) => {
		setPigeon(pigeon);
	};

	return (
		<div className='App'>
			<Home setPigeonHandler={setPigeonHandler} />
			<EggAndPigeon />
			<Game pigeon={pigeon} displayGame={displayGame} />
		</div>
	);
}

export default App;
