import { useState } from 'react';
import BoardList from './components/BoardList';
import Board from './components/Board';
import './App.css';

function App() {
  const boards = [
    { id: 1, title: "Fun board"},
    { id: 2, title: "Happy board"},
    { id: 3, title: "Work board"}
  ];
  
  const [selectedBoard, setSelectedBoard] = useState(null);

  const handleSelectBoard = (board) => {
    setSelectedBoard(board);
  };

  return (
    <div className="app">
      <h1 className="app__title">Devspiration Boards</h1>
      <BoardList 
        boards={boards}
        onSelectBoard={handleSelectBoard}
      />
      {selectedBoard && (
        <Board 
          board={selectedBoard}
        />
      )}
      <>
    </>
    </div>
  );
}

export default App
