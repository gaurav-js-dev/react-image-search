import React from 'react';
import HomePage from './components/HomePage';
import { Provider } from 'react-redux';
import configureStore from './store';

const App = () => {
  const store = configureStore();
  return (
    <div className="App">
      <Provider store={store}>
        <HomePage />;
      </Provider>
    </div>
  );
};

export default App;
