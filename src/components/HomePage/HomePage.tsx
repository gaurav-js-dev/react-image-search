import React from 'react';
import ImageList from './components/ImageList';
import ImageSearch from './components/ImageSearch';

const HomePage = () => {
  return (
    <section className="HomePage">
      <ImageSearch />
      <ImageList />
    </section>
  );
};

export default HomePage;
