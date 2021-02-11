import cloneDeep from 'lodash/cloneDeep';
import { initialState as imagesState, IImagesState } from './imagesReducer';

export interface IReduxState {
  images: IImagesState;
}

const initialState: IReduxState = {
  images: imagesState
};

export const getInitialState = () => cloneDeep(initialState);

export default initialState;
