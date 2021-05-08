import { createMockStore } from 'src/code/testHelpers';

describe('Images Reducer', () => {
  it('should have initial state', () => {
    const store = createMockStore();
    expect(store.getState().images).toMatchObject({ imagesList: [], page: 1 });
  });

  it('should have initial state', () => {
    const store = createMockStore();
    expect(store.getState().images).toMatchObject({ imagesList: [], page: 1 });
  });
});
