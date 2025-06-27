import { useState } from 'react';
import './styles/CardForm.css';

const kCardFormData = {
  message: '',
  color: '#fff8a5',
};

const CardForm = ({ onCreateCard, boardId }) => {
  const [cardFormData, setCardFormData] = useState(kCardFormData);
  const [messageError, setMessageError] = useState('');
  const [focused, setFocused] = useState(false);

  const handleCardFormChange = (event) => {
    const { name, value } = event.target;

    setCardFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Custom validation for message
    if (name === 'message') {
      if (value.length < 1) {
        setMessageError('⚠️ Message must be at least 1 character.');
      } else if (value.length > 40) {
        setMessageError('⚠️ Message must be 40 characters or fewer.');
      } else {
        setMessageError('');
      }
    }
  };

  const handleBlur = () => {
    setFocused(true);
  };

  const submitCardData = (event) => {
    event.preventDefault();

    if (messageError || cardFormData.message.trim() === '') {
      setFocused(true);
      return;
    }
    const apiCardData = {
      message: cardFormData.message,
      card_color: cardFormData.color,
    };
    
    console.log("Form submitted:", cardFormData);
    onCreateCard(boardId, apiCardData);
    setCardFormData(kCardFormData);  // Reset form
    setFocused(false);
  };

  const inputErrorClass = focused && messageError ? 'form-input__error' : '';

  return (
    <section>
      <h2 className='form-title'>Add a New Card</h2>
      <form onSubmit={submitCardData}>
        <div className='form-inputs'>
          <div className='form-inputs__input'>
            <label htmlFor="cardMessage">Message: </label>
            <input
              className={inputErrorClass}
              onChange={handleCardFormChange}
              onBlur={handleBlur}
              type='text'
              name="message"
              id="cardMessage"
              value={cardFormData.message}
            />
            {focused && messageError && (
              <span className='form-error__msg'>{messageError}</span>
            )}
          </div>

          <div className='form-inputs__input'>
            <label htmlFor="cardColor">Card color: </label>
            <input
              // className='cardForm-input__color'
              onChange={handleCardFormChange}
              type="color"
              name="color"
              id="cardColor"
              value={cardFormData.color}
            />
          </div>

          <div className='cardForm-preview'>
            <p className='cardForm-preview__label'>Preview: </p>
            <div className='cardForm-preview__card' style={{ backgroundColor: cardFormData.color }}>
              <p>{cardFormData.message}</p>
            </div>
          </div>
        </div>

        <div>
          <button
            className='form-submit__button'
            type="submit"
            disabled={!!messageError || cardFormData.message.trim() === ''}
          >
            Add Card
          </button>
        </div>
      </form>
    </section>
  );
};

export default CardForm;
