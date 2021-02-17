import React from 'react';
import { Provider } from 'react-redux';
import Error from 'src/components/common/Error';
import Loader from 'src/components/common/Loader';
import Header from 'src/components/Header';
import HomePage from 'src/components/HomePage';
import configureStore from 'src/store';

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Header />
      <Loader />
      <Error />
      <HomePage />;
    </Provider>
  );
};

export default App;
