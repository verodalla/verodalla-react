import React from 'react';
import data from '../data.json';
import GalleryItem from './gallery_item';

import './main_gallery.css';

const MainGallery = () => {
  return (
    <div className="gallery">
      {data.map(datum => <GalleryItem {...datum} />)}
    </div>
  );
};

export default MainGallery;
