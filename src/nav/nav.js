import React from 'react';
import data from './nav.json';

import './nav.css';

const NavEntry = props => (
  <li className={props.className}>
    <a href={props.link} title={props.title}>
      <img src={props.image} alt={props.title} />
    </a>
  </li>
);

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {<NavEntry {...data.main} className={'nav__item nav__item--main'} />}
        {data.social.map(datum => (
          <NavEntry {...datum} className="nav__item" />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
