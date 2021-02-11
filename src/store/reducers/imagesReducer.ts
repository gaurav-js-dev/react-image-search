export const types = {
  FETCH_IMAGES_LIST: 'FETCH_IMAGES_LIST',
  SET_IMAGES_LIST: 'SET_IMAGES_LIST'
};

export interface IImages {
  url: string;
  likes: string;
}

export interface IImagesState {
  imagesList: IImages[];
  page: number;
}

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
      imagesList: [...state.imagesList, ...(payload as IImages[]).map((image: any) => ({ url: image.urls.small, likes: image.likes }))]
    };
  }
};

export default imagesReducer;
