/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import '../../scss/ToyBox.scss';

const ToyBox = ({ lightMode, setShowToy }) => {
  return (
    <div
      className={`ToyBox ${lightMode ? 'lightMode' : ''}`}
    >
      <div className="ToyBox__body">
        <section className="ToyBox__buttons">
          <span
            aria-label="drum"
            className="drum"
            role="button"
            onClick={() => setShowToy('DrumMachine')}
          >
            🥁
          </span>
          <span
            aria-label="guitar"
            className="guitar"
            role="button"
            onClick={() => setShowToy('GuitBox')}
          >
            🎸
          </span>
          <span
            aria-label="man: bald"
            className="man bald"
            role="button"
            onClick={() => setShowToy('WoolyWilly')}
          >
            👨‍🦲
          </span>
					<a href="https://wordup.netlify.com/">
          <span
            aria-label="UP! button"
            className="UP button"
            role="button"
            // onClick={() => setShowToy('WoolyWilly')}
						>
            🆙
          </span>
						</a>
        </section>
      </div>
    </div>
  );
};

export default ToyBox;
