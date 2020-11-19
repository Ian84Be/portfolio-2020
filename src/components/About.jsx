import React, { useState } from 'react';
import '../scss/About.scss';

const About = ({ lightMode, setLightMode }) => {
  const [pizza, setPizza] = useState(false);
  return (
    <div className={`About ${lightMode ? 'lightMode' : ''}`}>
      <div className="About__body">
        <header className="About__header">Hello World!</header>

        <div className="About__p">
          {pizza ? (
            <span
              role="img"
              className="pizza"
              aria-label="pizza"
              onMouseOut={() => setPizza(false)}
            >
              🍕
            </span>
          ) : (
            <span
              role="img"
              aria-label="laptop"
              onMouseOver={() => setPizza(true)}
            >
              💻
            </span>
          )}

          <p>
            I am a web developer with a passion for simple UI, and all things JavaScript.
          </p>
        </div>

        <div className="About__p">
          <p>
            When I am not staring into screens I like to play guitar, cook food,
            read books, and go outside, sometimes in that exact order.
          </p>
          <span
          aria-label="yin yang"
          className={`yin-yang ${lightMode ? 'lightMode' : ''}`}
          role="button"
          onClick={() => setLightMode(!lightMode)}
        >
          ☯
        </span>
        </div>
      </div>
    </div>
  );
};

export default About;
