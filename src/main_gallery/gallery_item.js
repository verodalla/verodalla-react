import React from 'react';
import { Link } from 'react-router-dom';
import './gallery_item.css';

const GalleryItem = (props) => <li className={'gallery-item'}>
  <Link to={props.link} title={props.title}><img src={props.image} alt={props.title}/></Link>
</li>

export default GalleryItem;
