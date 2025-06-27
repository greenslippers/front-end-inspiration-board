import axios from 'axios';
import { useState, useEffect } from 'react';
import BoardList from './components/BoardList';
import BoardForm from './components/BoardForm';
import Board from './components/Board';
import './App.css';

const kBaseUrl = import.meta.env.VITE_APP_BACKEND_URL;

const getBoardsApi = () => {
  return axios.get(`${kBaseUrl}/boards`)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.error(error);
      return [];
    });
};

const getCardsApi = (boardId) => {
  return axios.get(`${kBaseUrl}/boards/${boardId}/cards`)
    .then(response => {
      return response.data.map(convertCardFromApi);
    })
    .catch( error => {
      console.error(error);
      return [];
    })
}

const createCardApi =  (boardId, newCardData) => {
  return axios.post(`${kBaseUrl}/boards/${boardId}/cards`, newCardData)
  .then(response => convertCardFromApi(response.data[0]))git 
  .catch(error => console.error(error));
}

const deleteCardApi = (cardId) => {
  return axios.delete(`${kBaseUrl}/cards/${cardId}`)
  .catch(error => console.error(error));
};

const patchLikeCounterAPI = (cardId) => {
  return axios.patch(`${kBaseUrl}/cards/${cardId}/like`)
  .then(response => convertCardFromApi(response.data))
  .catch( error => console.error(error))
};

const convertCardFromApi = ((apiCard) => {
  if (!apiCard) return;
  const { board_id, card_color, card_id, likes_count, message } = apiCard;
  const newCard = {boardId: board_id, cardColor: card_color, id: card_id, likesCount: likes_count, message}

  return newCard
});

function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, updateSelectedBoard] = useState(null);
  const [cards, setCards] = useState([]);


  const getAllBoards = () => {
    return getBoardsApi()
    .then(response => {
      setBoards(response)
    });
  };

  useEffect(() => {
    getAllBoards();
  }, []);

  const getAllCards = (boardId) => {
    return getCardsApi(boardId)
      .then(response => setCards(response))
  }

  useEffect(() => {
    if (selectedBoard) {
      getAllCards(selectedBoard.id);
    }
  }, [selectedBoard]);

  const createCard = (boardId, newCardData) => {
    createCardApi(boardId, newCardData)
    .then(()=> getAllCards(boardId))
    // .then(newCard => {
    //   if (newCard){
    //     setCards(prevCards => [...prevCards, newCard])
    //   }
    // });
  };

  const deleteCard = (cardId) => {
    return deleteCardApi(cardId)
    .then(()=> {
      setCards(cards => cards.filter(card => {
        return card.id !== cardId
      }))
    })
  }

  const handleLikeCard = (cardId) => {
    return patchLikeCounterAPI(cardId)
    .then(updatedCard => {
      setCards(prevCards => {
        prevCards.map(card => {
          card.id === updatedCard.id ? updatedCard : card
        });
      });
    })
  };

    
  const handleSelectBoard = (board) => {
    updateSelectedBoard(board);
  };

  const handleCreateBoard = (boardData) => {
    const newBoard = {
      id: boards.length + 1,
      title: boardData.title,
      owner: boardData.owner
    };
    setBoards(prevBoards => [...prevBoards, newBoard]);
  };

  return (
    <div className="app">
      <h1 className="title">Devspiration Boards</h1>
      <div className="board-controls">
        <BoardList 
          boards={boards}
          onSelectBoard={handleSelectBoard}
        />
        <BoardForm 
          onCreateBoard={handleCreateBoard}
        />
      </div>
      {selectedBoard && (
        <Board
          board={selectedBoard}
          cards={cards}
          onCreateCard={createCard}
          onDeleteCard={deleteCard}
          onLikeCard={handleLikeCard}
        />
      )}
    </div>
  );
}

export default App