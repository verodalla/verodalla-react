import React from 'react';
import VerticalLayout from './layouts/vertical';
import StandardLayout from './layouts/standard';
import PressLayout from './layouts/press';

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

export default determineLayout;
