import React from 'react';
import { Provider } from 'react-redux';
import HomePage from 'src/components/HomePage';
import configureStore from 'src/store';

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
