import { useState } from 'react';
import PropTypes from 'prop-types';
import CardList from './CardList';
import CardForm from './CardForm';
import FormPopUp from './FormPopUp';
import './styles/Board.css';

const Board = ({ board, cards, onCreateCard, onDeleteCard, onLikeCard, onSortCards, sortCardsBy }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  

  const handleCreateCard = (boardId, cardData) => {
    onCreateCard(boardId, cardData)
    setIsPopUpOpen(false)
  }

  return (
    <div className="board">
      <div className="board__header">
        <div className="board__header-left">
          <h1 className="board__title">{board.title}</h1>
        </div>
        <div className="board__header-right">
          <p className="board__owner">Board made by <strong>{board.owner}</strong></p>
          <button onClick={() => setIsPopUpOpen(true) }>+ Add new card</button>
          <select className="board__sort-select" value={sortCardsBy} onChange={event => onSortCards(event.target.value)}>
            <option value="id">Sort by ID</option>
            <option value="alphabetical">Sort Alphabetically</option>
            <option value="likes">Sort by Likes</option>
          </select>
        </div>
      </div>

      <FormPopUp isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)}>
        <CardForm onCreateCard={handleCreateCard} boardId={board.id} />
      </FormPopUp>
      
      <div className="board__cards-container">
        <CardList cards={cards} onDeleteCard={onDeleteCard} onLikeCard={onLikeCard}/>
      </div>
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
  }).isRequired,
  onCreateCard: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onLikeCard: PropTypes.func.isRequired,
  onSortCards: PropTypes.func.isRequired,
  sortCardsBy: PropTypes.string.isRequired,
};

export default Board;