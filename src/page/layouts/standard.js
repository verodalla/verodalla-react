import React from 'react';

import SlideshowLayout from './slideshow.js';

import './standard.css';

const StandardLayout = props => {
  const { disableSlideshow } = props;
  if (props.activeSlideIndex && !disableSlideshow) {
    return <SlideshowLayout {...props} />;
  }
  return (
    <div>
      <h1>{props.title}</h1>
      {props.galleries.map(gallery => (
        <div>
          <div dangerouslySetInnerHTML={{ __html: gallery.description }} />
          <div className="subgallery">
            {gallery.gallery.map((galleryItem, index) => (
              <img
                width="175"
                height="175"
                src={galleryItem.thumbnail}
                onClick={disableSlideshow ? () => {} : () => props.handleImageClick(index)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StandardLayout;
