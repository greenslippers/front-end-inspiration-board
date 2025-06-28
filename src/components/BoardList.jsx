import PropTypes from 'prop-types';

const BoardList = ({ boards, onSelectBoard }) => {
  // const handleBoardClick = (board) => {
  //   onSelectBoard(board);
  // };

  const handleBoardChange = (event) => {
    const selectedBoardId = parseInt(event.target.value);
    const selectedBoard = boards.find(board => board.id === selectedBoardId);
    if (selectedBoard) {
      onSelectBoard(selectedBoard);
    }
  };

  return (
    <div className="board-list">
      <label htmlFor="board-select" className="board-list__label">
        Select a board:
      </label>
      <select 
        id="board-select"
        className="board-list__dropdown"
        onChange={handleBoardChange}
        defaultValue=""
      >
        <option value="" disabled>All boards</option>
        {boards.map(board => (
          <option key={board.id} value={board.id}>
            {board.title}
          </option>
        ))}
      </select>
    </div>
  );

  // return (
  //   <div className="board-list">
  //     <h2 className="board-list__title">All Boards</h2>
  //     <div className="board-list__container">
  //       {boards.map(board => (
  //         <div 
  //           key={board.id} 
  //           className="board-list__item"
  //           onClick={() => handleBoardClick(board)}
  //         >
  //           <h3 className="board-list__item-title"> - {board.title}</h3>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  onSelectBoard: PropTypes.func.isRequired,
};

export default BoardList;