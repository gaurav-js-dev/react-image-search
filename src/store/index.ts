import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import imageSaga from './sagas/imageSaga';
import reducers from './reducers';
import initialState from './reducers/initialState';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(imageSaga);
  return store;
}
