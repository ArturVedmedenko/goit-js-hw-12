import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api/`;

export const fetchPhotos = (searchQ, page) => {
  const axiosOptions = {
    params: {
      key: '45727307-f96b67a5018b68fa33b524c91',
      q: searchQ,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 15,
      page: page,
    },
  };
  return axios.get(``, axiosOptions);
};
