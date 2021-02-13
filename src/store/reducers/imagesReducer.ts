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

type fetchImagesListAction = { type: string };
type fetchImagesList = () => fetchImagesListAction;
export const fetchImagesList: fetchImagesList = () => ({
  type: types.FETCH_IMAGES_LIST
});

export const loadMoreImages: any = () => ({
  type: types.LOAD_MORE_IMAGES
});
type setImagesListAction = { type: string; payload: IImages[] };
type SetImagesList = (imagesList: IImages[]) => setImagesListAction;
export const setImagesList: SetImagesList = (imagesList: IImages[]) => ({
  type: types.SET_IMAGES_LIST,
  payload: imagesList
});

export const initialState: IImagesState = { imagesList: [], page: 1 };

type Actions = setImagesListAction;

const imagesReducer = (state: IImagesState = initialState, action: Actions) => {
  const { payload } = action;
  if (action.type === types.SET_IMAGES_LIST) {
    return {
      ...state,
      imagesList: [...state.imagesList, ...payload.map((image: any) => ({ url: image.urls.small, likes: image.likes, id: image.id }))]
    };
  } else if (action.type === types.LOAD_MORE_IMAGES) {
    return { ...state, page: state.page + 1 };
  } else return state;
};

export default imagesReducer;
