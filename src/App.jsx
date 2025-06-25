import { useState } from 'react';
import BoardList from './components/BoardList';
import Board from './components/Board';
import './App.css';

function App() {
  const boards = [
    { id: 1, title: "Fun board", owner: "Collette"},
    { id: 2, title: "Happy board", owner: "Lina"},
    { id: 3, title: "Work board", owner: "Natasha"},
    { id: 4, title: "Outside board", owner: "Jane"}
  ];
  
  const [selectedBoard, updateSelectedBoard] = useState(null);

  const handleSelectBoard = (board) => {
    updateSelectedBoard(board);
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
