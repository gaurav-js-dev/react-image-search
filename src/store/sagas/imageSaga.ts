import { AxiosError } from 'axios';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getImages } from 'src/code/api';
import { IReduxState } from 'src/store/reducers/initialState';

import { setError } from '../reducers/errorReducer';
import { setImagesList, types as imagesTypes } from '../reducers/imagesReducer';
import { hideLoader, showLoader } from '../reducers/loadingReducer';

export const getPage = (state: IReduxState) => state.images.page;

function* dispatchError(error: AxiosError) {
  const { response } = error;
  yield put(setError({ code: response?.status, message: response?.data.message }));
  yield put(hideLoader());
}

function* fetchImagesList() {
  try {
    const page = yield select(getPage);
    yield put(showLoader());
    const response = yield call(getImages, page);
    yield put(setImagesList(response.data));
    yield put(hideLoader());
  } catch (error) {
    yield call(dispatchError, error);
  }
}

export default function* imageSaga() {
  yield takeEvery(imagesTypes.FETCH_IMAGES_LIST, fetchImagesList);
}
