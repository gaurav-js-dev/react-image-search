export const types = {
  FETCH_IMAGES_LIST: 'FETCH_IMAGES_LIST',
  SET_IMAGES_LIST: 'SET_IMAGES_LIST',
  LOAD_MORE_IMAGES: 'LOAD_MORE_IMAGES'
};

export interface IImages {
  url: string;
  likes: string;
  id: string;
}

export interface IImagesState {
  imagesList: IImages[];
  page: number;
}

type FetchImagesListAction = { type: string };
type FetchImagesList = () => FetchImagesListAction;
export const fetchImagesList: FetchImagesList = () => ({
  type: types.FETCH_IMAGES_LIST
});

type LoadMoreImagesAction = { type: string };
type LoadMoreImages = () => LoadMoreImagesAction;
export const loadMoreImages: LoadMoreImages = () => ({
  type: types.LOAD_MORE_IMAGES
});

type SetImagesListAction = { type: string; payload: IImages[] };
type SetImagesList = (imagesList: IImages[]) => SetImagesListAction;
export const setImagesList: SetImagesList = (imagesList: IImages[]) => ({
  type: types.SET_IMAGES_LIST,
  payload: imagesList
});

export const initialState: IImagesState = { imagesList: [], page: 1 };

type Actions = SetImagesListAction;

const imagesReducer = (state: IImagesState = initialState, action: Actions) => {
  const { payload } = action;
  switch (action.type) {
    case types.SET_IMAGES_LIST:
      return {
        ...state,
        imagesList: [...state.imagesList, ...payload.map((image: any) => ({ url: image.urls.small, likes: image.likes, id: image.id }))]
      };

    case types.LOAD_MORE_IMAGES:
      return {
        ...state,
        page: state.page + 1
      };

    default:
      return state;
  }
};

export default imagesReducer;
