import './Header.scss';

import React from 'react';

const Header = () => (
  <header onClick={() => window.location.reload()}>
    <span role="img" aria-label="camera">
      📸
    </span>
    React Image Search Engine
  </header>
);

export default Header;
