import cloneDeep from 'lodash/cloneDeep';

import { IImagesState, initialState as imagesState } from './imagesReducer';
import { ILoadingState, initialState as loaderState } from './loadingReducer';

export interface IReduxState {
  images: IImagesState;
  loader: ILoadingState;
}

const initialState: IReduxState = {
  images: imagesState,
  loader: loaderState
};

export const getInitialState = () => cloneDeep(initialState);

export default initialState;
