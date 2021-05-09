export const types = {
  FETCH_IMAGES_LIST: 'FETCH_IMAGES_LIST',
  SET_IMAGES_LIST: 'SET_IMAGES_LIST',
  LOAD_MORE_IMAGES: 'LOAD_MORE_IMAGES',
  FETCH_IMAGE_SEARCH_DATA: 'FETCH_USER_SEARCH_DATA',
  SET_IMAGE_SEARCH_DATA: 'SET_USER_SEARCH_DATA',
  CLEAR_IMAGES_LIST: 'CLEAR_IMAGES_LIST'
};

export interface IImages {
  url: string;
  likes: string;
  id: string;
  width: string;
  height: string;
}

export interface IImagesState {
  imagesList: IImages[];
  page: number;
}

export type FetchImagesListAction = { type: string };
type FetchImagesList = () => FetchImagesListAction;
export const fetchImagesList: FetchImagesList = () => ({
  type: types.FETCH_IMAGES_LIST
});

export type LoadMoreImagesAction = { type: string };
type LoadMoreImages = () => LoadMoreImagesAction;
export const loadMoreImages: LoadMoreImages = () => ({
  type: types.LOAD_MORE_IMAGES
});

export type SetImagesListAction = { type: string; payload: IImages[] };
type SetImagesList = (imagesList: IImages[]) => SetImagesListAction;
export const setImagesList: SetImagesList = (imagesList: IImages[]) => ({
  type: types.SET_IMAGES_LIST,
  payload: imagesList
});

export type FetchImagesSearchDataAction = { type: string; payload: string };
type FetchImagesSearchData = (query: string) => FetchImagesSearchDataAction;
export const fetchImagesSearchData: FetchImagesSearchData = query => ({
  type: types.FETCH_IMAGE_SEARCH_DATA,
  payload: query
});

export type SetImageSearchDataAction = { type: string; payload: IImages[] };
type SetImageSearchData = (imagesList: IImages[]) => SetImageSearchDataAction;
export const setImageSearchData: SetImageSearchData = imagesList => ({
  type: types.SET_IMAGE_SEARCH_DATA,
  payload: imagesList
});

export type ClearImagesListAction = { type: string };
type ClearImagesList = () => ClearImagesListAction;
export const clearImagesList: ClearImagesList = () => ({
  type: types.CLEAR_IMAGES_LIST
});

export const initialState: IImagesState = {
  imagesList: [],
  page: 1
};

type Actions = SetImagesListAction | FetchImagesSearchDataAction | SetImageSearchDataAction;

const imagesReducer = (state: IImagesState = initialState, action: Actions) => {
  const { payload } = action;
  switch (action.type) {
    case types.SET_IMAGES_LIST:
      return {
        ...state,
        imagesList: [
          ...state.imagesList,
          ...(payload as IImages[]).map((image: any) => ({
            url: image.urls.small,
            likes: image.likes,
            id: image.id,
            height: image.height,
            width: image.width
          }))
        ]
      };

    case types.LOAD_MORE_IMAGES:
      return {
        ...state,
        page: state.page + 1
      };

    case types.SET_IMAGE_SEARCH_DATA:
      return {
        ...state,
        imagesList: [
          ...state.imagesList,
          ...(payload as IImages[]).map((image: any) => ({
            url: image.urls.small,
            likes: image.likes,
            id: image.id,
            height: image.height,
            width: image.width
          }))
        ]
      };

    case types.CLEAR_IMAGES_LIST:
      return {
        ...state,
        imagesList: initialState.imagesList
      };
    default:
      return state;
  }
};

export default imagesReducer;
