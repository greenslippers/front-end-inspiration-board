import axios from 'axios';
import { useState, useEffect } from 'react';
import BoardList from './components/BoardList';
import BoardForm from './components/BoardForm';
import Board from './components/Board';
import './App.css';

const kBaseUrl = import.meta.env.VITE_APP_BACKEND_URL;

const selectedBoardCards = [
  {
    id: 1,
    message: 'Hola',
    likesCount: 10,
  }
]

const getBoardsApi = () => {
  return axios.get(kBaseUrl)
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(error => {
      console.log(error);
      return [];
    });
};

function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, updateSelectedBoard] = useState(null);


  const getAllBoards = () => {
    return getBoardsApi()
    .then(response => {
      console.log(response)
      setBoards(response)
    });
  };

  useEffect(() => {
    getAllBoards();
  }, []);

  useEffect(() => {
  console.log("Boards in App:", boards);
}, [boards]);
    

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
          cards={selectedBoardCards}
          />
      )}
    </div>
  );
}

export default App
