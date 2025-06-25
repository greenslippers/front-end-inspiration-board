import { useState } from 'react';
import PropTypes from 'prop-types';

const kBoardFormData = {
  title: '',
  owner: '',
};

const BoardForm = ({ onCreateBoard }) => {
  const [boardFormData, setBoardFormData] = useState(kBoardFormData);

  const submitBoardData = (event) => {
    event.preventDefault();
    if (boardFormData.title.trim() && boardFormData.owner.trim()) {
      onCreateBoard(boardFormData);
      setBoardFormData(kBoardFormData);
    }
  };

  const handleBoardFormChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setBoardFormData(prevData => {
      return {
        ...prevData,
        [inputName]: inputValue
      };
    });
  };

  return (
    <section className="board-form">
      <h2 className="form-title">Create New Board</h2>
      <form onSubmit={submitBoardData}>
        <div className="form-inputs">
          <label htmlFor="boardTitle">Board Title: </label>
          <input
            onChange={handleBoardFormChange}
            type="text"
            name="title"
            id="boardTitle"
            value={boardFormData.title}
            required
          />
          <label htmlFor="boardOwner">Owner: </label>
          <input
            onChange={handleBoardFormChange}
            type="text"
            name="owner"
            id="boardOwner"
            value={boardFormData.owner}
            required
          />
        </div>
        <div>
          <button className="form-submit__button" type="submit">Create Board</button>
        </div>
      </form>
    </section>
  );
};

BoardForm.propTypes = {
  onCreateBoard: PropTypes.func.isRequired,
};

export default BoardForm;