import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yu Xiang Luo</h2>
        <p><a href="mailto:linus13514@gmail.com">linus13514@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Yu Xiang. I am a Junior majoring Computer Science at <a href="https://www.ntu.edu.tw/english/">National Taiwan University</a>. {' '}
        I&apos;m currently working as a <i>ML Engineer Intern</i> at <a href="https://ailabs.tw">Taiwan AI Labs</a>. {' '}
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Yu Xiang Luo <Link to="/">yuxianglo.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
