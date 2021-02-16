import React from 'react';
import { Provider } from 'react-redux';
import Loader from 'src/components/common/Loader';
import HomePage from 'src/components/HomePage';
import configureStore from 'src/store';

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Loader />
      <HomePage />;
    </Provider>
  );
};

export default App;
