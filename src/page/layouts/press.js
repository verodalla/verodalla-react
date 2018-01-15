import React from 'react';
import './press.css';

const PressLayout = props => {

  return (
    <div className="gallery--page">
      <h1>{props.title}</h1>
      {props.galleries.map(gallery => (
        <div>
          <div className="subgallery--press">
            {gallery.gallery.map(galleryItem => (
              <article className="gallery-item--press">
                <figure style={{paddingTop: `${Number(galleryItem.height) / Number(galleryItem.width) * 100}%`}} className="placeholder">
                  <img className="image--press" src={galleryItem.thumbnail}  />
                </figure>
                {galleryItem.french ? (
                  <a title="" href={galleryItem.french} download>
                    <img src={props.frenchFlag} alt="" className="flag flag--french"/>{' '}
                  </a>
                ) : (
                  ''
                )}
                {galleryItem.english ? (
                  <a title="" href={galleryItem.english} download>
                    <img src={props.americanFlag} alt="" className="flag flag--english" />{' '}
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
