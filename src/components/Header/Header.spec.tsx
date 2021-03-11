import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Header from './Header';

import { Provider } from 'react-redux';
import { createMockStore } from 'src/code/testHelpers';
import { getInitialState, IReduxState } from 'src/store/reducers/initialState';

const createRenderer = (state: IReduxState = getInitialState()): RenderResult => {
  const store = createMockStore(state);
  return render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

describe('<Header/>', () => {
  it('should render with correct text', () => {
    const { getByText } = createRenderer();
    expect(getByText('Unsplash Random Images!')).toBeInTheDocument();
  });
});
