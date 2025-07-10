import { useState } from 'react';
import PropTypes from 'prop-types';
import FormPopUp from './FormPopUp';

const kBoardFormData = {
  title: '',
  owner: '',
};

const BoardForm = ({ onCreateBoard }) => {
  const [boardFormData, setBoardFormData] = useState(kBoardFormData);
  // const [isPopUpOpen, setIsPopUpOpen] = useState(showFormInitially);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!boardFormData.title.trim()) {
      newErrors.title = 'Board title is required';
    } else if (boardFormData.title.trim().length < 2) {
      newErrors.title = 'Board title must be at least 2 characters';
    } else if (boardFormData.title.trim().length > 50) {
      newErrors.title = 'Board title must be less than 50 characters';
    }

    if (!boardFormData.owner.trim()) {
      newErrors.owner = 'Owner name is required';
    } else if (boardFormData.owner.trim().length < 2) {
      newErrors.owner = 'Owner name must be at least 2 characters';
    } else if (boardFormData.owner.trim().length > 30) {
      newErrors.owner = 'Owner name must be less than 30 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitBoardData = (event) => {
    event.preventDefault();

    if (validateForm()) {
      onCreateBoard(boardFormData);
      setBoardFormData(kBoardFormData);
      setErrors({});
      // setIsPopUpOpen(false);
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

    // Clear error for this field when user starts typing
    if (errors[inputName]) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors[inputName];
        return newErrors;
      });
    }
  };

  return (
    <>
      {/* {!showFormInitially && (
        <button onClick={() => setIsPopUpOpen(true)}>+ Create a new board</button>
      )}
      <FormPopUp isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)}> */}
        <section className="form-section">
          <h2 className="form-title">Create New Board</h2>
          <form onSubmit={submitBoardData}>
            <div className="form-inputs">
              <div className="form-inputs__input">
                <label htmlFor="boardTitle">Board Title: </label>
                <input
                  onChange={handleBoardFormChange}
                  type="text"
                  name="title"
                  id="boardTitle"
                  value={boardFormData.title}
                  className={errors.title ? 'error' : ''}
                />
                {errors.title && <span className="error-message">{errors.title}</span>}
              </div>

              <div className="form-inputs__input">
                <label htmlFor="boardOwner">Board made by: </label>
                <input
                  onChange={handleBoardFormChange}
                  type="text"
                  name="owner"
                  id="boardOwner"
                  value={boardFormData.owner}
                  className={errors.owner ? 'error' : ''}
                />
                {errors.owner && <span className="error-message">{errors.owner}</span>}
              </div>
            </div>
            <div className='form-button'>
              <button className="form-submit__button" type="submit">Create Board</button>
            </div>
          </form>
        </section>
      {/* </FormPopUp> */}
    </>
  );
};

BoardForm.propTypes = {
  onCreateBoard: PropTypes.func.isRequired,
};

export default BoardForm;