import axios from 'axios';

import { getImages, BASE_URL } from './api';

jest.mock('axios');

const mockAxios = axios as jest.Mocked<typeof axios>;

beforeEach(jest.resetAllMocks);

const TEST_BASE_URL = 'https://api.unsplash.com/photos/?client_id=eVds9XQ51U2XJR5eUixrQUKhKqHXiLocNllQRpWHjvQ&per_page=3';

describe('API', () => {
  it('should have correct BASE URL', () => {
    expect(BASE_URL).toEqual(TEST_BASE_URL);
  });

  describe('getImages', () => {
    it('should be invoked with correct params when next page is 1', () => {
      expect(mockAxios.get).not.toHaveBeenCalled();
      const expectedUrl = `${TEST_BASE_URL}&page=1`;
      getImages(1);
      expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl);
    });
  });
});
