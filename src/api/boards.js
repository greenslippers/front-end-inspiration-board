import axios from 'axios';

const kBaseUrl = import.meta.env.VITE_APP_BACKEND_URL;

export const getBoardsApi = () => {
  return axios.get(`${kBaseUrl}/boards`)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.error(error);
      return [];
    });
};

export const createBoardApi = (newBoardData) => {
  return axios.post(`${kBaseUrl}/boards`, newBoardData)
    .then(response => response.data)
    .catch(error => console.error(error));
};