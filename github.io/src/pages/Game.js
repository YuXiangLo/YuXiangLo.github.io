import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Game = () => {
  const [showGame, setShowGame] = useState(false);
  useEffect(() => {
    if (!/ReactSnap/i.test(navigator.userAgent)) {
      setShowGame(true);
    }
  }, []);

  return (
    <Main
      title="Game"
      description="A mario game for the placeholder, I'll update my game soon!"
    >
      <article className="post" id="Games">
        <header>
          <div className="title">
            <h2><Link to="/game">Game</Link></h2>
            <p><Link to="https://github.com/YuXiangLo/Bubblo">Source Code</Link></p>
          </div>
        </header>
        <h>
          This is the project I&apos;m working now.
          It&apos;s just a prototype but I still want to share this with you!
        </h>
        <br />
        <h>
          I suggest to play the game in full screen for better experience!
        </h>
        <br />
        <br />
        <ul>
          <li> Press &apos;E&apos; to view bulletin</li>
          <li> Press &apos;AD&apos; to move.</li>
          <li> Press &apos;Space&apos; to jump.</li>
          <li> Hold &apos;Space&apos; to float.</li>
          <li> Press &apos;W&apos; to climb</li>
          <li> Press &apos;F&apos; to fire</li>
          <li> Hold &apos;F&apos; to charge</li>
        </ul>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10' }}>
          {showGame && (
            <iframe
              title="Bubblo Demo"
              src="/webgl/index.html"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              allow="fullscreen; autoplay"
              allowFullScreen
            />
          )}
        </div>
      </article>
    </Main>
  );
};

export default Game;
