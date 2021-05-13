import axios from 'axios';

const key = '?client_id=eVds9XQ51U2XJR5eUixrQUKhKqHXiLocNllQRpWHjvQ';

export const BASE_URL = `https://api.unsplash.com/photos/${key}&per_page=6`;
export const SEARCH_URL = `https://api.unsplash.com/search/photos/${key}&per_page=6&query=`;

export const getImages = (page: number) => {
  const url = `${BASE_URL}&page=${page}`;
  return axios.get(url);
};

export const searchImage = (search: string, page: number) => {
  const url = `${SEARCH_URL}&query=${search}&page=${page}`;
  return axios.get(url);
};
