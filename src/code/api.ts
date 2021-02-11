import axios from 'axios';

const key = '?client_id=eVds9XQ51U2XJR5eUixrQUKhKqHXiLocNllQRpWHjvQ';

const BASE_URL = `https://api.unsplash.com/photos/`;

export const getImages = (page: number) => {
  const url = `${BASE_URL}${key}&per_page=3&page=${page}`;
  return axios.get(url);
};
