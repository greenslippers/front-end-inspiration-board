import { useState, useEffect } from 'react';
import { getBoardsApi, createBoardApi } from './api/boards';
import { getCardsApi, createCardApi, patchLikeCounterAPI, deleteCardApi } from './api/cards';

import BoardList from './components/BoardList';
import BoardForm from './components/BoardForm';
import Board from './components/Board';
import WelcomeBoard from './components/WelcomeBoard';

import './App.css';

function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, updateSelectedBoard] = useState(null);
  const [cards, setCards] = useState([]);

  // =========== Side Effects ========
  useEffect(() => {
    handleGetAllBoards();
  }, []);

  useEffect(() => {
    if (selectedBoard) {
      handleGetAllCards(selectedBoard.id);
    }
  }, [selectedBoard]);

  // ======= Boards: Fetch, Create, Select Board ======= 
  const handleGetAllBoards = () => {
    return getBoardsApi()
    .then(response => {
      setBoards(response)
    });
  };
  
  const handleCreateBoard = (boardData) => {
    createBoardApi(boardData)
    .then(newBoard => {
      if (newBoard) {
        updateSelectedBoard(newBoard);
      }
      return handleGetAllBoards();
    });
  };
  
  const handleSelectBoard = (board) => {
    updateSelectedBoard(board);
  };

  // ======= Cards: Fetch, Create, Like, Delete =======
  const handleGetAllCards = (boardId) => {
    return getCardsApi(boardId)
    .then(response => setCards(response))
  }

  const handleCreateCard = (boardId, newCardData) => {
    createCardApi(boardId, newCardData)
    .then(()=> handleGetAllCards(boardId))
  };

  const handleDeleteCard = (cardId) => {
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
          return prevCards.map(card =>
            card.id === updatedCard.id ? updatedCard : card
          );
        });
      })
  };

  // ================= Render ===================
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="title">Devspiration</h1>
          <p className="subtitle">A space where you can create boards for anything that inspires you and fill them with cards that have ideas, quotes, goals, or notes.</p>
        </div>
        <div className="board-controls">
          <BoardList 
            boards={boards}
            onSelectBoard={handleSelectBoard}
          />
          <BoardForm
            onCreateBoard={handleCreateBoard}
          />
        </div>
      </header>
      {!selectedBoard && <WelcomeBoard />}

      {selectedBoard && (
        <Board
          board={selectedBoard}
          cards={cards}
          onCreateCard={handleCreateCard}
          onDeleteCard={handleDeleteCard}
          onLikeCard={handleLikeCard}
        />
      )}

      <footer className="footer">
      Devspiration Team | ADA C23 | 2025
      </footer>
    </div>
  );
}

export default App;