import './Footer.scss';

import React from 'react';
import { useSelector } from 'react-redux';
import { IReduxState } from 'src/store/reducers/initialState';

const Footer = () => {
  const isLoading = useSelector((s: IReduxState) => s.loader.isLoading);
  if (isLoading) return null;
  return (
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
};

export default Footer;
