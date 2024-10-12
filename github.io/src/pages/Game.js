import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Projects = () => (
  <Main
    title="Game"
    description="A mario game for the placeholder, I'll update my game soon!"
  >
    <article className="post" id="Games">
      <header>
        <div className="title">
          <h2><Link to="/games">Game</Link></h2>
        </div>
      </header>
      <p>
        This is the project I&apos;m working now.
        It&apos;s just a prototype but I still want to share this with you!
      </p>
      <ul>
        <li> Press &apos;Space&apos; to jump.</li>
        <li> Press &apos;AD&apos; to move.</li>
        <li> Press &apos;E&apos; to enter a door.</li>
        <li> Press &apos;QE&apos; to get hurt or heal.</li>
      </ul>
      <iframe
        title="Mario Demo"
        src="/webgl/index.html"
        width="100%"
        height="800px"
        style={{ border: 'none' }}
        allowFullScreen
      />
    </article>
  </Main>
);

export default Projects;
