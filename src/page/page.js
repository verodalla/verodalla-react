import React from 'react';
import data from '../data.json';
import './standard.css';
import './vertical.css';
import './press.css';

const StandardLayout = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.galleries.map(gallery => (
        <div>
          <div dangerouslySetInnerHTML={{ __html: gallery.description }} />
          <div className="subgallery">
          {gallery.gallery.map(galleryItem => (
            <img width="175" height="175" src={galleryItem.image} />
          ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const PressLayout = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.galleries.map(gallery => (
        <div>
          <div className="subgallery--press">
          {gallery.gallery.map(galleryItem => (
            <img className="image--press" src={galleryItem.image} />
          ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const VerticalLayout = props => {
  return (
    <div>
      <h1>{props.title} Vertical</h1>
      {props.galleries.map(gallery => (
        <div className="layout--vertical">
          <div className="description--vertical" dangerouslySetInnerHTML={{ __html: gallery.description }} />
          <div className="subgallery--vertical">
          {gallery.gallery.map(galleryItem => (
            <img width="175" height="175" src={galleryItem.image} />
          ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const determineLayout = found => {
  switch (found.layout) {
    case 'vertical':
      return <VerticalLayout {...found} />;
    case 'press':
      return <PressLayout {...found} />;
    default:
      return <StandardLayout {...found} />;
  }
};
const Page = ({ match }) => {
  const path = match.url;
  const found = data.reduce((acc, curr) => {
    if (curr.link === path) {
      return curr;
    }

    if (acc && acc.link === path) {
      return acc;
    }
  });

  return <div>{determineLayout(found)}</div>;
};

export default Page;
