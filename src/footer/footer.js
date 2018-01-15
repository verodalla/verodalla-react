import React from 'react';
import data from './footer.json';

import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div
        dangerouslySetInnerHTML={{
          __html: Object.keys(data).reduce((acc, curr) => {
            acc += `${data[curr]}<br/>`;
            return acc;
          }, '')
        }}
      />
    </footer>
  );
};

export default Footer;
