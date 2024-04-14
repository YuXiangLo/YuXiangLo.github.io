import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Yu Xiang Luo's personal website. Junior at National Taiwan University."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            This site references code from <b><a href="https://github.com/mldangelo/personal-site?tab=readme-ov-file">here</a></b>
          </p>
        </div>
      </header>
      <p> Welcome! </p>
      <p>Feel free to read more <Link to="/about">about me</Link>, or you can check out my <Link to="/resume">resume</Link>, view <Link to="/stats">site statistics</Link>, or <Link to="/contact">contact</Link> me.</p>
    </article>
  </Main>
);

export default Index;
