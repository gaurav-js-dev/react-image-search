import cloneDeep from 'lodash/cloneDeep';

import { IError, initialState as errorState } from './errorReducer';
import { IImagesState, initialState as imagesState } from './imagesReducer';
import { ILoadingState, initialState as loaderState } from './loadingReducer';

export interface IReduxState {
  images: IImagesState;
  loader: ILoadingState;
  error: IError;
}

const initialState: IReduxState = {
  images: imagesState,
  loader: loaderState,
  error: errorState
};

export const getInitialState = () => cloneDeep(initialState);

export default initialState;
