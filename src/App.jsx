import React, { useState } from 'react';
import Profile from './Profile';
import './scss/App.scss';

const App = () => {
	const [lightMode, setLightMode] = useState(false);
	
  return (
		<main className={`App ${lightMode ? 'lightMode' : ''}`}>
    <Profile lightMode={lightMode} />
		</main>
  );
};

export default App;
