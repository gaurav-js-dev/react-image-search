import './Footer.scss';

import React from 'react';

const Footer = () => (
  <footer>
    <a href="https://github.com/gaurav-js-dev" rel="noopener noreferrer" target="_blank">
      Github Source
    </a>
    <span role="img" aria-label="heart">
      {` ⚛ `}
    </span>

    <a href="https://gaurav-js-dev.github.io/portfolio/" rel="noopener noreferrer" target="_blank">
      Gaurav Sharma{' '}
      <span role="img" aria-label="heart">
        {` 👩‍💻  `}
      </span>
    </a>
  </footer>
);

export default Footer;
