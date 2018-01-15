import React from 'react';

import SlideshowLayout from './slideshow.js';

import './standard.css';

const StandardLayout = props => {
  const { disableSlideshow } = props;
  if (props.activeSlideIndex >= 0 && !disableSlideshow) {
    return <SlideshowLayout {...props} />;
  }
  return (
    <div className="gallery--page gallery--standard">
      <h1 className="gallery__title">{props.title}</h1>
      {props.galleries.map(gallery => [
        <div
          className="gallery__desc"
          dangerouslySetInnerHTML={{ __html: gallery.description }}
        />,
        <div className="subgallery">
          {gallery.gallery.map((galleryItem, index) => (
            <figure className="placeholder">
              <img
                src={galleryItem.thumbnail}
                onClick={
                  disableSlideshow
                    ? () => {}
                    : () => props.handleImageClick(index)
                }
                className={
                  disableSlideshow
                    ? 'subgallery__image'
                    : 'subgallery__image subgallery__image--clickable'
                }
              />
            </figure>
          ))}
        </div>
      ])}
    </div>
  );
};

export default StandardLayout;
