import React, { useEffect, useState } from 'react';

import PentaIcon from '../Icons/Penta';
import TriadIcon from '../Icons/Triad';

import cg1P from '../../assets/guitar/c-min-penta/cg-1.wav';
import cg2P from '../../assets/guitar/c-min-penta/cg-2.wav';
import cg3P from '../../assets/guitar/c-min-penta/cg-3.wav';
import cg4P from '../../assets/guitar/c-min-penta/cg-4.wav';
import cg5P from '../../assets/guitar/c-min-penta/cg-5.wav';
import cg6P from '../../assets/guitar/c-min-penta/cg-6.wav';
import cg7P from '../../assets/guitar/c-min-penta/cg-7.wav';
import cg8P from '../../assets/guitar/c-min-penta/cg-8.wav';
import cg9P from '../../assets/guitar/c-min-penta/cg-9.wav';

import cg1T from '../../assets/guitar/c-min-triad/cg-1.wav';
import cg2T from '../../assets/guitar/c-min-triad/cg-2.wav';
import cg3T from '../../assets/guitar/c-min-triad/cg-3.wav';
import cg4T from '../../assets/guitar/c-min-triad/cg-4.wav';
import cg5T from '../../assets/guitar/c-min-triad/cg-5.wav';
import cg6T from '../../assets/guitar/c-min-triad/cg-6.wav';
import cg7T from '../../assets/guitar/c-min-triad/cg-7.wav';
import cg8T from '../../assets/guitar/c-min-triad/cg-8.wav';
import cg9T from '../../assets/guitar/c-min-triad/cg-9.wav';

import '../../scss/ToyBox/GuitBox.scss';

const GuitBox = ({ lightMode }) => {
  const qRef = React.createRef();
  const wRef = React.createRef();
  const eRef = React.createRef();
  const rRef = React.createRef();
  const tRef = React.createRef();
  const yRef = React.createRef();
  const uRef = React.createRef();
  const iRef = React.createRef();
  const oRef = React.createRef();
  const guitarKeyCodes = [
    { k: 81, ref: qRef },
    { k: 87, ref: wRef },
    { k: 69, ref: eRef },
    { k: 82, ref: rRef },
    { k: 84, ref: tRef },
    { k: 89, ref: yRef },
    { k: 85, ref: uRef },
    { k: 73, ref: iRef },
    { k: 79, ref: oRef }
  ];
  const [mode, setMode] = useState(0);

  useEffect(() => {
    window.addEventListener('keydown', playSound);
    return () => window.removeEventListener('keydown', playSound);
  });

  return (
    <div className={`GuitBox__container ${lightMode ? 'lightMode' : ''}`}>
      <audio
        data-mode="c-min-penta"
        data-key="81"
        src={cg1P}
        ref={mode === 0 ? qRef : null}
      ></audio>
      <audio
        data-mode="c-min-penta"
        data-key="87"
        src={cg2P}
        ref={mode === 0 ? wRef : null}
      ></audio>
      <audio
        data-mode="c-min-penta"
        data-key="69"
        src={cg3P}
        ref={mode === 0 ? eRef : null}
      ></audio>
      <audio
        data-mode="c-min-penta"
        data-key="82"
        src={cg4P}
        ref={mode === 0 ? rRef : null}
      ></audio>
      <audio
        data-mode="c-min-penta"
        data-key="84"
        src={cg5P}
        ref={mode === 0 ? tRef : null}
      ></audio>
      <audio
        data-mode="c-min-penta"
        data-key="89"
        src={cg6P}
        ref={mode === 0 ? yRef : null}
      ></audio>
      <audio
        data-mode="c-min-penta"
        data-key="85"
        src={cg7P}
        ref={mode === 0 ? uRef : null}
      ></audio>
      <audio
        data-mode="c-min-penta"
        data-key="73"
        src={cg8P}
        ref={mode === 0 ? iRef : null}
      ></audio>
      <audio
        data-mode="c-min-penta"
        data-key="79"
        src={cg9P}
        ref={mode === 0 ? oRef : null}
      ></audio>

      <audio
        data-mode="c-min-triad"
        data-key="81"
        src={cg1T}
        ref={mode === 1 ? qRef : null}
      ></audio>
      <audio
        data-mode="c-min-triad"
        data-key="87"
        src={cg2T}
        ref={mode === 1 ? wRef : null}
      ></audio>
      <audio
        data-mode="c-min-triad"
        data-key="69"
        src={cg3T}
        ref={mode === 1 ? eRef : null}
      ></audio>
      <audio
        data-mode="c-min-triad"
        data-key="82"
        src={cg4T}
        ref={mode === 1 ? rRef : null}
      ></audio>
      <audio
        data-mode="c-min-triad"
        data-key="84"
        src={cg5T}
        ref={mode === 1 ? tRef : null}
      ></audio>
      <audio
        data-mode="c-min-triad"
        data-key="89"
        src={cg6T}
        ref={mode === 1 ? yRef : null}
      ></audio>
      <audio
        data-mode="c-min-triad"
        data-key="85"
        src={cg7T}
        ref={mode === 1 ? uRef : null}
      ></audio>
      <audio
        data-mode="c-min-triad"
        data-key="73"
        src={cg8T}
        ref={mode === 1 ? iRef : null}
      ></audio>
      <audio
        data-mode="c-min-triad"
        data-key="79"
        src={cg9T}
        ref={mode === 1 ? oRef : null}
      ></audio>

      <div className="guitar__keys">
        <div
          data-key="81"
          className="key"
          onMouseDown={() => playSound({ keyCode: 81 })}
          onTouchStart={() => playSound({ keyCode: 81 })}
          onTouchEnd={e => e.preventDefault()}
        >
          <kbd>Q</kbd>
        </div>
        <div
          data-key="87"
          className="key"
          onMouseDown={() => playSound({ keyCode: 87 })}
          onTouchStart={() => playSound({ keyCode: 87 })}
          onTouchEnd={e => e.preventDefault()}
        >
          <kbd>W</kbd>
        </div>
        <div
          data-key="69"
          className="key"
          onMouseDown={() => playSound({ keyCode: 69 })}
          onTouchStart={() => playSound({ keyCode: 69 })}
          onTouchEnd={e => e.preventDefault()}
        >
          <kbd>E</kbd>
        </div>
        <div
          data-key="82"
          className="key"
          onMouseDown={() => playSound({ keyCode: 82 })}
          onTouchStart={() => playSound({ keyCode: 82 })}
          onTouchEnd={e => e.preventDefault()}
        >
          <kbd>R</kbd>
        </div>
        <div
          data-key="84"
          className="key"
          onMouseDown={() => playSound({ keyCode: 84 })}
          onTouchStart={() => playSound({ keyCode: 84 })}
          onTouchEnd={e => e.preventDefault()}
        >
          <kbd>T</kbd>
        </div>
        <div
          data-key="89"
          className="key"
          onMouseDown={() => playSound({ keyCode: 89 })}
          onTouchStart={() => playSound({ keyCode: 89 })}
          onTouchEnd={e => e.preventDefault()}
        >
          <kbd>Y</kbd>
        </div>
        <div
          data-key="85"
          className="key"
          onMouseDown={() => playSound({ keyCode: 85 })}
          onTouchStart={() => playSound({ keyCode: 85 })}
          onTouchEnd={e => e.preventDefault()}
        >
          <kbd>U</kbd>
        </div>
        <div
          data-key="73"
          className="key"
          onMouseDown={() => playSound({ keyCode: 73 })}
          onTouchStart={() => playSound({ keyCode: 73 })}
          onTouchEnd={e => e.preventDefault()}
        >
          <kbd>I</kbd>
        </div>
        <div
          data-key="79"
          className="key"
          onMouseDown={() => playSound({ keyCode: 79 })}
          onTouchStart={() => playSound({ keyCode: 79 })}
          onTouchEnd={e => e.preventDefault()}
        >
          <kbd>O</kbd>
        </div>
      </div>

      <section className="controls">
        <div className="mode-switch">
          <span
            className={mode === 0 ? 'icon active' : 'icon'}
            onMouseDown={() => setMode(0)}
            onTouchStart={() => setMode(0)}
            onTouchEnd={e => e.preventDefault()}
          >
            <PentaIcon />
          </span>
          <input
            type="range"
            min="0"
            max="1"
            onChange={handleChange}
            value={mode}
          />
          <span
            className={mode === 1 ? 'icon tri active' : 'icon tri'}
            onMouseDown={() => setMode(1)}
            onTouchStart={() => setMode(1)}
            onTouchEnd={e => e.preventDefault()}
          >
            <TriadIcon />
          </span>
        </div>
        <div className="controls__buttons">
          <button
            className="play"
            onMouseDown={handleAutoPlay}
            onTouchStart={handleAutoPlay}
            onTouchEnd={e => e.preventDefault()}
          >
            AutoPlay
          </button>
          <button
            className="stop"
            onMouseDown={stopAll}
            onTouchStart={stopAll}
            onTouchEnd={e => e.preventDefault()}
          >
            Stop
          </button>
        </div>
      </section>
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

  function handleChange(e) {
    let toggle = parseFloat(e.target.value);
    setMode(toggle);
  }

  function makePhrase(e) {
    const guitarNums = [81, 87, 69, 82, 84, 89, 85, 73, 79];
    const thisPhrase = [];
    const min = 0,
      max = 9,
      time = 165;
    for (let i = 0; i < 64; i++) {
      let thisNote = 0;
      let rand = Math.floor(Math.random() * (max - min + 1) + min);
      thisNote = guitarNums[rand];
      thisNote = thisNote ? thisNote : 0; //0 for a silence
      thisPhrase.push({ keyCode: thisNote, delay: i * time });
    }
    return thisPhrase;
  }

  function playSound({ keyCode, delay = 0 }) {
    const guitarKey = guitarKeyCodes.find(key => key.k === keyCode);
    if (!guitarKey) return;
    const audio = guitarKey.ref.current;
    audio.currentTime = 0;
    if (delay) {
      return setTimeout(() => audio.play(), delay);
    } else audio.play();
  }
};

export default GuitBox;
