import React from 'react';
import Slider from '../../slider/slider';

const SlideshowLayout = props => {
  const { galleries, activeSlideIndex, close } = props;
  const images = galleries[0].gallery;
  return (
    <Slider images={images} activeSlideIndex={activeSlideIndex} close={close} />
  );
};

export default SlideshowLayout;
