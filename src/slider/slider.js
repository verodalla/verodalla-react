import React, { PureComponent } from 'react';
import ReactSwipe from 'react-swipe';
import './slider.css';

class Slider extends PureComponent {
  constructor(props) {
    super();

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.lazyLoad = this.lazyLoad.bind(this);
    this.state = {
      currentlyActiveSlideIndex: props.activeSlideIndex
    }
  }

  next() {
    this.reactSwipe.next();
    this.setState({ currentlyActiveSlideIndex: this.reactSwipe.getPos() })
  }

  prev() {
    this.reactSwipe.prev();
    this.setState({ currentlyActiveSlideIndex: this.reactSwipe.getPos() })
  }

  lazyLoad(el) {
    const img = el.querySelector('img');
    if (img.src.length === 0) {
      img.src = img.dataset.src;
    }
  }

  render() {
    const { activeSlideIndex, images, close } = this.props;
    const options = {
      continuous: true,
      startSlide: activeSlideIndex,
      callback: (index, elem) => {
        this.lazyLoad(elem);
      }
    };



    return (
      <div className="gallery--page gallery--slideshow">
        <ReactSwipe
          className="carousel"
          swipeOptions={options}
          key={images.length}
          ref={reactSwipe => (this.reactSwipe = reactSwipe)}
        >
          {images.map((galleryItem, index) => {
            const aspectRatio = galleryItem.height / galleryItem.width;
            const isPortraitOrientation = aspectRatio >= 0.70;
            const preloadedImg = <img src={galleryItem.image} className={isPortraitOrientation ? 'portrait' : ''}/>;
            const toBeLazyLoaded = <img data-src={galleryItem.image} className={isPortraitOrientation ? 'portrait' : ''} />;
            return (
              <div>
                <figure>
                  {index === activeSlideIndex ? preloadedImg : toBeLazyLoaded}
                </figure>
              </div>
            );
          })}
        </ReactSwipe>
        <div className="gallery__metadata">
          <div>
            <h3>{images[this.state.currentlyActiveSlideIndex].name}</h3>
            <p>{images[this.state.currentlyActiveSlideIndex].materials}</p>
            <p>{images[this.state.currentlyActiveSlideIndex].dimensions}</p>
            <p>{images[this.state.currentlyActiveSlideIndex].year}</p>
          </div>
        </div>
        <div className="gallery__controls">
          <div className="gallery__arrows">
          <button type="button" className="gallery__button" onClick={this.prev}>
            <i className="icon-circle-left" />
          </button>
          <button type="button" className="gallery__button" onClick={this.next}>
            <i className="icon-circle-right" />
          </button>
          </div>
          <button type="button" className="gallery__button" onClick={close}>
            <i className="icon-fat-close" />
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
