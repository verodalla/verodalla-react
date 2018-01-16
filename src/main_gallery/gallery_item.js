import React from 'react';
import { Link } from 'react-router-dom';
import './gallery_item.css';

const GalleryItem = props => (
  <li className={'gallery-item'}>
    <Link to={props.link} title={props.title}>
      <figure className="placeholder animate-caption">
        <img src={props.image} alt={props.title} />
        <figcaption><h3 className="gallery-item__title">{props.title}</h3></figcaption>
      </figure>
    </Link>
  </li>
);

export default GalleryItem;
