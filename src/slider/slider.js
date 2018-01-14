import React, { PureComponent } from 'react';
import ReactSwipe from 'react-swipe';

class Slider extends PureComponent {
  constructor() {
    super();

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    this.reactSwipe.next();
  }

  prev() {
    this.reactSwipe.prev();
  }

  render() {
    const { activeSlideIndex, images, close } = this.props;
    const options = { continuous: false, startSlide: activeSlideIndex };
    return (
      <div>
        <ReactSwipe
          className="carousel"
          swipeOptions={options}
          key={images.length}
          ref={reactSwipe => (this.reactSwipe = reactSwipe)}
        >
          {images.map(path => <img src={path} />)}
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
