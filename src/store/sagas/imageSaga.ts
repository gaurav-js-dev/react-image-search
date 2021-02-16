import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getImages } from 'src/code/api';
import { IReduxState } from 'src/store/reducers/initialState';

import { setImagesList, types as imagesTypes } from '../reducers/imagesReducer';

export const getPage = (state: IReduxState) => state.images.page;

function* fetchImagesList() {
  try {
    const page = yield select(getPage);
    const response = yield call(getImages, page);
    yield put(setImagesList(response.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* imageSaga() {
  yield takeEvery(imagesTypes.FETCH_IMAGES_LIST, fetchImagesList);
}
