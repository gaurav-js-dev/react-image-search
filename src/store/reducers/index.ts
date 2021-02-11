import { combineReducers } from 'redux';

import { IReduxState } from './initialState';
import imagesReducer from './imagesReducer';

export const rootReducer: any = {
  image: imagesReducer
};

export default combineReducers<IReduxState>(rootReducer);
