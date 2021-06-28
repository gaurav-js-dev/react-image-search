import { AxiosError } from 'axios';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getImages, searchImage } from 'src/code/api';
import { IReduxState } from 'src/store/reducers/initialState';

import { setError } from '../reducers/errorReducer';
import { FetchImagesSearchDataAction, setImagesList, types as imagesTypes } from '../reducers/imagesReducer';

export const getPage = (state: IReduxState) => state.images.page;

function* dispatchError(error: AxiosError) {
  const { response } = error;
  yield put(setError({ code: response?.status, message: response?.data.errors }));
}

function* handleFetchImagesList() {
  try {
    const response = yield call(getImages);
    yield put(setImagesList(response.data));
  } catch (error) {
    yield call(dispatchError, error);
  }
}

function* handlefetchImagesSearchData(action: FetchImagesSearchDataAction) {
  try {
    const page = yield select(getPage);
    const response = yield call(searchImage, action.payload, page);
    yield put(setImagesList(response.data.results));
  } catch (error) {
    yield call(dispatchError, error);
  }
}

export default function* imageSaga() {
  yield takeEvery(imagesTypes.FETCH_IMAGES_LIST, handleFetchImagesList);
  yield takeEvery(imagesTypes.FETCH_IMAGE_SEARCH_DATA, handlefetchImagesSearchData);
}
