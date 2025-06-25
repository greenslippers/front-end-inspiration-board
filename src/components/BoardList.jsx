import PropTypes from 'prop-types';

const BoardList = ({ boards, onSelectBoard }) => {
  const handleBoardClick = (board) => {
    onSelectBoard(board);
  };

  return (
    <div className="board-list">
      <h2 className="board-list__title">All Boards</h2>
      <div className="board-list__container">
        {boards.map(board => (
          <div 
            key={board.id} 
            className="board-list__item"
            onClick={() => handleBoardClick(board)}
          >
            <h3 className="board-list__item-title"> - {board.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  onSelectBoard: PropTypes.func.isRequired,
};

export default BoardList;