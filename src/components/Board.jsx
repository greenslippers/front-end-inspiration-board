import PropTypes from 'prop-types';
import Card from './Card';
import './styles/Board.css';

const Board = ({ board }) => {
  const cards = [];

  return (
    <div className="board">
      <h1 className="board__title">{board.title}</h1>
      <p className="board__owner">Owner: {board.owner}</p>
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