export const types = {
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR'
};

export type IError = {
  message: string;
  code: number | undefined;
};

export const initialState: IError = {
  message: '',
  code: undefined
};

type SetErrorAction = { type: string; payload: IError };
type SetError = (error: IError) => SetErrorAction;

export const setError: SetError = error => ({
  type: types.SET_ERROR,
  payload: error
});

export const clearError = (): SetErrorAction => setError(initialState);

const errorReducer = (state: IError = initialState, action: any) => {
  if (action.type === types.SET_ERROR) {
    return {
      ...state,
      ...action.payload
    };
  } else return state;
};

export default errorReducer;
