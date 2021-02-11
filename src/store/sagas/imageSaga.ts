import { getImages } from '../../code/api';
import { setImagesList, types as imagesTypes } from '../reducers/imagesReducer';
import { call, put, takeEvery, select } from 'redux-saga/effects';

export const getPage = (state: any) => state.page;

function* fetchImagesList() {
  try {
    const page = yield select(getPage);
    const response = yield call(getImages, page);
    yield put(setImagesList(response));
  } catch (error) {
    console.log(error);
  }
}

export default function* imageSaga() {
  yield takeEvery(imagesTypes.FETCH_IMAGES_LIST, fetchImagesList);
}
