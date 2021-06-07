export const types = {
  FETCH_IMAGES_LIST: 'FETCH_IMAGES_LIST',
  SET_IMAGES_LIST: 'SET_IMAGES_LIST',
  SET_PAGE_INCREMENT: 'SET_PAGE_INCREMENT',
  SET_SEARCH_TEXT: 'SET_SEARCH_TEXT',
  FETCH_IMAGE_SEARCH_DATA: 'FETCH_USER_SEARCH_DATA',
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
  searchText: string;
}

export type FetchImagesListAction = { type: string };
type FetchImagesList = () => FetchImagesListAction;
export const fetchImagesList: FetchImagesList = () => ({
  type: types.FETCH_IMAGES_LIST
});

export type SetPageIncrementAction = { type: string };
type SetPageIncrement = () => SetPageIncrementAction;
export const setPageIncrement: SetPageIncrement = () => ({
  type: types.SET_PAGE_INCREMENT
});

export type SetImagesListAction = { type: string; payload: IImages[] };
type SetImagesList = (imagesList: IImages[]) => SetImagesListAction;
export const setImagesList: SetImagesList = (imagesList: IImages[]) => ({
  type: types.SET_IMAGES_LIST,
  payload: imagesList
});

export type FetchImagesSearchDataAction = { type: string; payload: string }; // Setting the search text to global state and passing the text to saga.
type FetchImagesSearchData = (query: string) => FetchImagesSearchDataAction;
export const fetchImagesSearchData: FetchImagesSearchData = query => ({
  type: types.FETCH_IMAGE_SEARCH_DATA,
  payload: query
});

export type ClearImagesListAction = { type: string };
type ClearImagesList = () => ClearImagesListAction;
export const clearImagesList: ClearImagesList = () => ({
  type: types.CLEAR_IMAGES_LIST
});

export const initialState: IImagesState = {
  imagesList: [],
  page: 1,
  searchText: ''
};

type Actions = SetImagesListAction | FetchImagesSearchDataAction;

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

    case types.SET_PAGE_INCREMENT:
      return {
        ...state,
        page: state.page + 1
      };

    case types.FETCH_IMAGE_SEARCH_DATA: // Setting the search text to global state and passing the text to saga.
      return {
        ...state,
        searchText: payload as string
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
