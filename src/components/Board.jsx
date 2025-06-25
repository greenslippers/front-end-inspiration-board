import { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import CardForm from './CardForm';
import FormPopUp from './FormPopUp';
import './styles/Board.css';

const cards = [];

const Board = ({ board }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  return (
    <div className="board">
      <h1 className="board__title">{board.title}</h1>
      <p className="board__owner">Owner: {board.owner}</p>
      <button onClick={() => setIsPopUpOpen(true) }>➕ Add Card</button>
      <FormPopUp isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)}>
        <CardForm/>
      </FormPopUp>
      <div className="board__cards-container">
        {/* Cardlist */}
        <Card cardMessage={'Hello'} likesCounter={10} />
        {/* Cardlist */}
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
};

export default Board;