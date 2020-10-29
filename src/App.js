import './App.css';
import EggandPigeon from './Components/EggAndPigeon/EggAndPigeon';
import Game from './Components/Game/Game';
import Home from './Components/Home/Home';

function App() {
	return (
		<div className='App'>
			<EggandPigeon />
			<Game />
			<Home />
		</div>
	);
}

export default App;
