import { combineReducers } from 'redux';

import { IReduxState } from './initialState';
import imagesReducer from './imagesReducer';

export const rootReducer: any = {
  images: imagesReducer
};

export default combineReducers<IReduxState>(rootReducer);
