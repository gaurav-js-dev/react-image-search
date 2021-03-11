import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Error from './Error';
import { Provider } from 'react-redux';
import { createMockStore } from 'src/code/testHelpers';
import { getInitialState, IReduxState } from 'src/store/reducers/initialState';
import { fireEvent } from '@testing-library/react';

const mockStoreDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockStoreDispatch
}));

const createRenderer = (state: IReduxState = getInitialState()): RenderResult => {
  const store = createMockStore(state);
  return render(
    <Provider store={store}>
      <Error />
    </Provider>
  );
};

describe('Error', () => {
  it('should display error text when there is an error', () => {
    const state = getInitialState();
    state.error.message = 'Wrong API key';
    const { getByTestId } = createRenderer(state);
    expect(getByTestId('Error')).toHaveTextContent('Wrong API key');
  });

  it('should not render error text when there is no error', () => {
    const { queryByText } = createRenderer();
    expect(queryByText('Oops! there is an error.')).not.toBeInTheDocument();
  });

  it('should close and clear the error', () => {
    const state = getInitialState();
    state.error.message = 'Wrong API key';
    const { getByTestId } = createRenderer(state);
    fireEvent.click(getByTestId('close'));
    expect(mockStoreDispatch).toHaveBeenCalledWith({
      type: 'SET_ERROR',
      payload: {
        code: undefined,
        message: ''
      }
    });
  });
});
