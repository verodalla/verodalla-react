import React from 'react';
import './vertical.css';

const VerticalLayout = props => {
  return (
    <div>
      <h1>{props.title} Vertical</h1>
      {props.galleries.map(gallery => (
        <div className="layout--vertical">
          <div
            className="description--vertical"
            dangerouslySetInnerHTML={{ __html: gallery.description }}
          />
          <div className="subgallery--vertical">
            {gallery.gallery.map(galleryItem => (
              <img width="175" height="175" src={galleryItem.thumbnail} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalLayout;
