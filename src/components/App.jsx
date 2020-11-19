import React, { useState } from 'react';
import Profile from './Profile';
import About from './About';
import Footer from './Footer';
import ToyBox from './ToyBox/ToyBox';
import DrumMachine from './ToyBox/DrumMachine';
import GuitBox from './ToyBox/GuitBox';
import WoolyWilly from './ToyBox/WoolyWilly';
import '../scss/App.scss';

const App = () => {
	const [lightMode, setLightMode] = useState(false);
	const [showToy, setShowToy] = useState('');
	
  return (
		<main className={`App ${lightMode ? 'lightMode' : ''}`}>
			<Profile lightMode={lightMode} />
			<About lightMode={lightMode} setLightMode={setLightMode}/>
			<ToyBox lightMode={lightMode} setShowToy={setShowToy}/>
			<section className={`toyBoxModal ${showToy === '' ? 'hidden' : ''}`}>
				<div className="toyBoxModal__body">
					
					{showToy === 'DrumMachine' && <DrumMachine lightMode={lightMode}/>}
					{showToy === 'GuitBox' && <GuitBox lightMode={lightMode}/>}
					{showToy === 'WoolyWilly' && <WoolyWilly lightMode={lightMode}/>}
					<div 
						className="toyBoxModal__closeIcon"
						onClick={() => setShowToy('')}
					>
						Close
					</div>
				</div>
			</section>
			<Footer lightMode={lightMode} />
		</main>
  );
};

export default App;
