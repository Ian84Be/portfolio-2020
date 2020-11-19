import React from 'react';
import githubLight from './assets/img/GitHub-Mark-Light-64px.png';
import lambdaLogo from './assets/img/Lambda_Logo.png';
import linkedInLogo from './assets/img/LI-In-Bug.png';
import profilePic from './assets/img/ian-belknap3.png';
import './scss/App.scss';
import './scss/Profile.scss';

const Profile = ({lightMode}) => {
  return (
    <div
      className={`Profile ${lightMode ? 'lightMode' : ''}`}
    >
      <div className="Profile__body">
        <section className="Profile__left-side" role="banner">
          <h1>Ian Belknap</h1>
          <h2>Full Stack Web Developer</h2>

          <div className="icons">
            <a href="https://lambdaschool.com/">
              <img
                alt="Lambda School"
                className="lambda"
                role="button"
                src={lambdaLogo}
              />
            </a>
            <a href="https://github.com/Ian84Be">
              <img
                alt="GitHub"
                className="github"
                role="button"
                src={githubLight}
              />
            </a>
            <a href="https://www.linkedin.com/in/ian-belknap/">
              <img
                alt="LinkedIn"
                className="linkedin"
                role="button"
                src={linkedInLogo}
              />
            </a>
          </div>
        </section>

        <section
          className={`Profile__right-side ${lightMode ? 'lightMode' : ''}`}
        >
          <img alt="Ian Belknap" src={profilePic} />
        </section>
      </div>
    </div>
  );
};

export default Profile;
