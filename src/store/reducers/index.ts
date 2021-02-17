import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import imagesReducer from './imagesReducer';
import { IReduxState } from './initialState';
import loadingReducer from './loadingReducer';

export const rootReducer: any = {
  images: imagesReducer,
  loader: loadingReducer,
  error: errorReducer
};

export default combineReducers<IReduxState>(rootReducer);
