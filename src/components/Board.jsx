import { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import CardList from './CardList';
import CardForm from './CardForm';
import FormPopUp from './FormPopUp';
import './styles/Board.css';

const Board = ({ board, cards, onCreateCard }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleCreateCard = (boardId, cardData) => {
    onCreateCard(boardId, cardData)
    setIsPopUpOpen(false)
  }

  return (
    <div className="board">
      <h1 className="board__title">{board.title}</h1>
      <p className="board__owner">Owner: {board.owner}</p>
      <button onClick={() => setIsPopUpOpen(true) }>➕ Add Card</button>
      <FormPopUp isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)}>
        <CardForm onCreateCard={handleCreateCard} boardId={board.id} />
      </FormPopUp>
      <div className="board__cards-container">
        <CardList cards={cards}/>
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
};

export default Board;