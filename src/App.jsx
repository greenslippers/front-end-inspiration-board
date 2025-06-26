import axios from 'axios';
import { useState, useEffect } from 'react';
import BoardList from './components/BoardList';
import BoardForm from './components/BoardForm';
import Board from './components/Board';
import './App.css';

const kBaseUrl = import.meta.env.VITE_APP_BACKEND_URL;

const getBoardsApi = () => {
  return axios.get(kBaseUrl)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.error(error);
      return [];
    });
};

const getCardsApi = (boardId) => {
  return axios.get(`${kBaseUrl}/${boardId}/cards`)
    .then(response => {
      return response.data.map(convertCardFromApi);
    })
    .catch( error => {
      console.error(error);
      return [];
    })
}

const convertCardFromApi = ((apiCard) => {
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
        />
      )}
    </div>
  );
}

export default App
