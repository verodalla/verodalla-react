import React, { PureComponent } from 'react';
import ReactSwipe from 'react-swipe';
import './slider.css';

class Slider extends PureComponent {
  constructor() {
    super();

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.lazyLoad = this.lazyLoad.bind(this);
  }

  next() {
    this.reactSwipe.next();
  }

  prev() {
    this.reactSwipe.prev();
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
      continuous: false,
      startSlide: activeSlideIndex,
      callback: (index, elem) => {
        this.lazyLoad(elem);
      }
    };

    return (
      <div className="gallery--page">
        <ReactSwipe
          className="carousel"
          swipeOptions={options}
          key={images.length}
          ref={reactSwipe => (this.reactSwipe = reactSwipe)}
        >
          {images.map((path, index) => {
            const preloadedImg = <img src={path} />;
            const toBeLazyLoaded = <img data-src={path} />;
            return (
              <div>
                <figure>
                  {index === activeSlideIndex ? preloadedImg : toBeLazyLoaded}
                </figure>
              </div>
            );
          })}
        </ReactSwipe>

        <div>
          <button type="button" onClick={this.prev}>
            Prev
          </button>
          <button type="button" onClick={this.next}>
            Next
          </button>
          <button type="button" onClick={close}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
