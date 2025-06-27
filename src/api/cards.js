import axios from 'axios';

const kBaseUrl = import.meta.env.VITE_APP_BACKEND_URL;

export const getCardsApi = (boardId) => {
  return axios.get(`${kBaseUrl}/boards/${boardId}/cards`)
    .then(response => {
      return response.data.map(convertCardFromApi);
    })
    .catch(error => {
      console.error(error);
      return [];
    })
}

export const createCardApi = (boardId, newCardData) => {
  return axios.post(`${kBaseUrl}/boards/${boardId}/cards`, newCardData)
    .then(response => convertCardFromApi(response.data[0]))
    .catch(error => console.error(error));
}

export const deleteCardApi = (cardId) => {
  return axios.delete(`${kBaseUrl}/cards/${cardId}`)
    .catch(error => console.error(error));
};

export const patchLikeCounterAPI = (cardId) => {
  return axios.patch(`${kBaseUrl}/cards/${cardId}/like`)
    .then(response => convertCardFromApi(response.data))
    .catch(error => console.error(error))
};

export const convertCardFromApi = ((apiCard) => {
  if (!apiCard) return;
  const { board_id, card_color, card_id, likes_count, message } = apiCard;
  const newCard = {boardId: board_id, cardColor: card_color, id: card_id, likesCount: likes_count, message}

  return newCard
});