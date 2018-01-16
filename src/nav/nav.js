import React from 'react';
import data from './nav.json';
import { Link } from 'react-router-dom';
import './nav.css';

const NavEntry = props => {
  // const image = ;
  const link = props.internalLink ? (
    <Link to={props.link} title={props.title}>
      <img src={props.image} alt={props.title} />
    </Link>
  ) : (
    <a href={props.link} title={props.title}>
      <i className={props.image} />
    </a>
  );
  return <li className={props.className}>{link}</li>;
};

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {
          <NavEntry
            {...data.main}
            className={'nav__item nav__item--main'}
            internalLink={true}
          />
        }
        <li className="nav__social">
          <ul>
            {data.social.map(datum => (
              <NavEntry {...datum} className={`nav__item nav__item--${datum.title}`} />
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
