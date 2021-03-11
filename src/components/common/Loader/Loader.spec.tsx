import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Loader from './Loader';

import { Provider } from 'react-redux';
import { createMockStore } from 'src/code/testHelpers';
import { getInitialState, IReduxState } from 'src/store/reducers/initialState';

const createRenderer = (state: IReduxState = getInitialState()): RenderResult => {
  const store = createMockStore(state);
  return render(
    <Provider store={store}>
      <Loader />
    </Provider>
  );
};

describe('<Loader/>', () => {
  it('should show loading while isLoading is true', () => {
    const state = getInitialState();
    state.loader.isLoading = true;
    const { getByText } = createRenderer(state);
    expect(getByText('Loading')).toBeInTheDocument();
  });
  it('should not show loading while isLoading is false', () => {
    const state = getInitialState();
    state.loader.isLoading = false;
    const { queryByText } = createRenderer(state);
    expect(queryByText('Loading')).not.toBeInTheDocument();
  });
});
