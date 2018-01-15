import React, { PureComponent } from 'react';
import data from '../data.json';
import determineLayout from './determine_layout';

import './page.css';

class Page extends PureComponent {
  constructor() {
    super();
    this.handleImageClick = this.handleImageClick.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      activeSlideIndex: -1
    };
  }

  handleImageClick(index) {
    this.setState({ activeSlideIndex: index });
  }

  close() {
    this.setState({ activeSlideIndex: -1 });
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

    return determineLayout(
          found,
          this.handleImageClick,
          this.close,
          this.state.activeSlideIndex
        )


  }
}

export default Page;
