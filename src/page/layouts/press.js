import React from 'react';
import './press.css';

const PressLayout = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.galleries.map(gallery => (
        <div>
          <div className="subgallery--press">
            {gallery.gallery.map(galleryItem => (
              <article>
                <figure>
                  <img className="image--press" src={galleryItem.thumbnail} />
                </figure>
                {galleryItem.french ? (
                  <a title="" href={galleryItem.french} download>
                    <img src={props.frenchFlag} />{' '}
                  </a>
                ) : (
                  ''
                )}
                {galleryItem.english ? (
                  <a title="" href={galleryItem.english} download>
                    <img src={props.americanFlag} />{' '}
                  </a>
                ) : (
                  ''
                )}
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PressLayout;
