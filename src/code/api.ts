import axios from 'axios';

const key = '?client_id=eVds9XQ51U2XJR5eUixrQUKhKqHXiLocNllQRpWHjvQ';

export const BASE_URL = `https://api.unsplash.com/photos/${key}&per_page=3`;

export const getImages = (page: number) => {
  const url = `${BASE_URL}&page=${page}`;
  return axios.get(url);
};
