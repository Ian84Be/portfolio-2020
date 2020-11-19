import React, { useEffect } from 'react';

import hihat from '../../assets/DrumMachine/sounds/hihat.wav';
import kick from '../../assets/DrumMachine/sounds/kick.wav';
import snare from '../../assets/DrumMachine/sounds/snare.wav';
import tom from '../../assets/DrumMachine/sounds/tom.wav';

import kickDrumIcon from '../../assets/DrumMachine/img/kickdrum.png';
import snareDrumIcon from '../../assets/DrumMachine/img/snaredrum2.png';
import tomDrumIcon from '../../assets/DrumMachine/img/floortom2.png';
import hiHatIcon from '../../assets/DrumMachine/img/hihat2.png';

import '../../scss/ToyBox/DrumMachine.scss';

const DrumMachine = ({ lightMode }) => {
  const kickRef = React.createRef();
  const hihatRef = React.createRef();
  const snareRef = React.createRef();
  const tomRef = React.createRef();
  const drumKeyCodes = [
    { k: 83, ref: snareRef },
    { k: 68, ref: tomRef },
    { k: 74, ref: hihatRef },
    { k: 75, ref: kickRef }
  ];

  useEffect(() => {
    window.addEventListener('keydown', playSound);
    return () => window.removeEventListener('keydown', playSound);
  });

  return (
    <div className={`DrumMachine__container ${lightMode ? 'lightMode' : ''}`}>
      <audio data-key="83" src={hihat} ref={hihatRef}></audio>
      <audio data-key="68" src={kick} ref={kickRef}></audio>
      <audio data-key="74" src={snare} ref={snareRef}></audio>
      <audio data-key="75" src={tom} ref={tomRef}></audio>
      <section className="drum-kit__keys">
        <div
          data-key="74"
          className="key"
          onMouseDown={() => playSound({ keyCode: 74 })}
          onTouchStart={() => playSound({ keyCode: 74 })}
          onTouchEnd={e => e.preventDefault()}
        >
          <img alt="hi hat cymbals" className="hihat" src={hiHatIcon} />
          <kbd>J</kbd>
        </div>

        <div
          data-key="68"
          className="key"
          onMouseDown={() => playSound({ keyCode: 68 })}
          onTouchStart={() => playSound({ keyCode: 68 })}
          onTouchEnd={e => e.preventDefault()}
        >
          <img alt="tom drum" className="tomDrum" src={tomDrumIcon} />
          <kbd>D</kbd>
        </div>
        <div
          data-key="83"
          className="key"
          onMouseDown={() => playSound({ keyCode: 83 })}
          onTouchStart={() => playSound({ keyCode: 83 })}
          onTouchEnd={e => e.preventDefault()}
        >
          <img alt="snare drum" className="snareDrum" src={snareDrumIcon} />
          <kbd>S</kbd>
        </div>
        <div
          data-key="75"
          className="key"
          onMouseDown={() => playSound({ keyCode: 75 })}
          onTouchStart={() => playSound({ keyCode: 75 })}
          onTouchEnd={e => e.preventDefault()}
        >
          <img alt="kick drum" className="kickDrum" src={kickDrumIcon} />
          <kbd>K</kbd>
        </div>
      </section>

      <div className="drum-controls">
        <button
          className="play drums"
          onMouseDown={handleAutoPlay}
          onTouchStart={handleAutoPlay}
          onTouchEnd={e => e.preventDefault()}
        >
          AutoPlay
        </button>
        <button
          className="stop drums"
          onMouseDown={stopAll}
          onTouchStart={stopAll}
          onTouchEnd={e => e.preventDefault()}
        >
          Stop
        </button>
      </div>
    </div>
  );

  function stopAll() {
    const highestTimeoutId = setTimeout(() => null);
    for (let i = 0; i < highestTimeoutId; i++) clearTimeout(i);
  }

  function handleAutoPlay() {
    let newPhrase = makePhrase();
    newPhrase.forEach(note => playSound(note));
  }

  function playSound({ keyCode, delay = 0 }) {
    const drumKey = drumKeyCodes.find(key => key.k === keyCode);
    if (!drumKey) return;
    const audio = drumKey.ref.current;
    audio.currentTime = 0;
    if (delay) {
      return setTimeout(() => audio.play(), delay);
    } else audio.play();
  }

  function makePhrase() {
    const drumNums = [83, 68, 74, 75];
    const thisPhrase = [];
    let min = 0,
      max = 4,
      time = 330;
    for (let i = 0; i < 64; i++) {
      let thisNote = 0;
      let rand = Math.floor(Math.random() * (max - min + 1) + min);
      thisNote = drumNums[rand];
      thisNote = thisNote ? thisNote : 0; //0 for a silence
      thisPhrase.push({ keyCode: thisNote, delay: i * time });
    }
    return thisPhrase;
  }
};

export default DrumMachine;
