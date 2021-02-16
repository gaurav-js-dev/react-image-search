import { combineReducers } from 'redux';

import imagesReducer from './imagesReducer';
import { IReduxState } from './initialState';
import loadingReducer from './loadingReducer';

export const rootReducer: any = {
  images: imagesReducer,
  loader: loadingReducer
};

export default combineReducers<IReduxState>(rootReducer);
