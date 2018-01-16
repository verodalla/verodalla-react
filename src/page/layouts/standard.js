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
            <figure
              className={`placeholder animate-caption subgallery__item ${disableSlideshow
                ? ''
                : 'subgallery__item--clickable'}`}
              onClick={
                disableSlideshow
                  ? () => {}
                  : () => props.handleImageClick(index)
              }
            >
              <img className="subgallery__image" src={galleryItem.thumbnail} />
              <figcaption>
                <h3>{galleryItem.name}</h3>
                <p>{galleryItem.materials}</p>
                <p>{galleryItem.dimensions}</p>
                <p>{galleryItem.year}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      ])}
    </div>
  );
};

export default StandardLayout;
