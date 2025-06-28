import { useState } from 'react';
import PropTypes from 'prop-types';
import FormPopUp from './FormPopUp';

const kBoardFormData = {
  title: '',
  owner: '',
};

const BoardForm = ({ onCreateBoard }) => {
  const [boardFormData, setBoardFormData] = useState(kBoardFormData);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const submitBoardData = (event) => {
    event.preventDefault();
    if (boardFormData.title.trim() && boardFormData.owner.trim()) {
      onCreateBoard(boardFormData);
      setBoardFormData(kBoardFormData);
      setIsPopUpOpen(false);
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
    <>
      <button onClick={() => setIsPopUpOpen(true)}>+ Create a new board</button>
      <FormPopUp isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)}>
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
              <label htmlFor="boardOwner">Board made by: </label>
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
      </FormPopUp>
    </>
  );
};

BoardForm.propTypes = {
  onCreateBoard: PropTypes.func.isRequired,
};

export default BoardForm;