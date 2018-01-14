import React, { PureComponent } from 'react';
import Slider from '../slider/slider';
import data from '../data.json';
import './standard.css';
import './vertical.css';
import './press.css';

const StandardLayout = props => {
  if (props.activeSlideIndex) {
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
                onClick={() => props.handleImageClick(index)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const SlideshowLayout = props => {
  const { galleries, activeSlideIndex, close } = props;
  const images = galleries[0].gallery.map(galleryItem => galleryItem.image);
  return (
    <Slider images={images} activeSlideIndex={activeSlideIndex} close={close} />
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
              <img className="image--press" src={galleryItem.thumbnail} />
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

const determineLayout = (found, handleImageClick, close, activeSlideIndex) => {
  switch (found.layout) {
    case 'vertical':
      return <VerticalLayout {...found} />;
    case 'press':
      return <PressLayout {...found} />;
    default:
      return (
        <StandardLayout
          {...found}
          handleImageClick={handleImageClick}
          close={close}
          activeSlideIndex={activeSlideIndex}
        />
      );
  }
};

class Page extends PureComponent {
  constructor() {
    super();
    this.handleImageClick = this.handleImageClick.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      activeSlideIndex: false
    };
  }

  handleImageClick(index) {
    this.setState({ activeSlideIndex: index });
  }

  close() {
    this.setState({ activeSlideIndex: false });
  }

  render() {
    const { match } = this.props;
    const slug = match.params.page;
    const found = data.reduce((acc, curr) => {
      if (curr.link === `/${slug}`) {
        return curr;
      }

      if (acc && acc.link === `/${slug}`) {
        return acc;
      }
    });

    return (
      <div>
        {determineLayout(
          found,
          this.handleImageClick,
          this.close,
          this.state.activeSlideIndex
        )}
      </div>
    );
  }
}

export default Page;
