import { useState } from 'react';
import PropTypes from 'prop-types';

const kBoardFormData = {
  title: '',
  owner: '',
};

const BoardForm = ({ onCreateBoard }) => {
  const [boardFormData, setBoardFormData] = useState(kBoardFormData);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const { title, owner } = boardFormData;

    // Validate title
    if (!title.trim()) {
      newErrors.title = 'Board title is required';
    } else if (title.trim().length < 2) {
      newErrors.title = 'Title must be at least 2 characters';
    } else if (title.trim().length > 50) {
      newErrors.title = 'Title must be less than 50 characters';
    }

    // Validate owner
    if (!owner.trim()) {
      newErrors.owner = 'Owner name is required';
    } else if (owner.trim().length < 2) {
      newErrors.owner = 'Owner must be at least 2 characters';
    } else if (owner.trim().length > 30) {
      newErrors.owner = 'Owner must be less than 30 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBoardFormChange = (event) => {
    const { name, value } = event.target;

    setBoardFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear individual error on input change
    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const submitBoardData = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onCreateBoard(boardFormData);
      setBoardFormData(kBoardFormData);
      setErrors({});
    }
  };

  return (
    <section className="form-section">
      <h2 className="form-title">Create New Board</h2>
      <form onSubmit={submitBoardData}>
        <div className="form-inputs">
          <div className="form-inputs__input">
            <label htmlFor="boardTitle">Board Title:</label>
            <input
              type="text"
              name="title"
              id="boardTitle"
              value={boardFormData.title}
              onChange={handleBoardFormChange}
              className={errors.title ? 'error' : ''}
            />
            {errors.title && (
              <span className="error-message">{errors.title}</span>
            )}
          </div>

          <div className="form-inputs__input">
            <label htmlFor="boardOwner">Board made by:</label>
            <input
              type="text"
              name="owner"
              id="boardOwner"
              value={boardFormData.owner}
              onChange={handleBoardFormChange}
              className={errors.owner ? 'error' : ''}
            />
            {errors.owner && (
              <span className="error-message">{errors.owner}</span>
            )}
          </div>
        </div>

        <div className="form-button">
          <button className="form-submit__button" type="submit">
            Create Board
          </button>
        </div>
      </form>
    </section>
  );
};

BoardForm.propTypes = {
  onCreateBoard: PropTypes.func.isRequired,
};

export default BoardForm;