import { useState } from 'react';
import BoardList from './components/BoardList';
import BoardForm from './components/BoardForm';
import Board from './components/Board';
import './App.css';

function App() {
  const [boards, setBoards] = useState([
    { id: 1, title: "Fun board", owner: "Collette"},
    { id: 2, title: "Happy board", owner: "Lina"},
    { id: 3, title: "Work board", owner: "Natasha"},
    { id: 4, title: "Outside board", owner: "Jane"}
  ]);
  
  const [selectedBoard, updateSelectedBoard] = useState(null);

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
        />
      )}
    </div>
  );
}

export default App
