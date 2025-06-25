import { useState } from 'react';
import './styles/CardForm.css'

const kCardFormData = {
  message: '',
  color: '#fff8a5',
};

const CardForm = () => {
  const [cardFormData, setCardFormData] = useState(kCardFormData)

  const submitCardData = (event) => {
    event.preventDefault();
    // On create card function
    setCardFormData(kCardFormData);
  }

  const handleCardFormChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setCardFormData(prevData => {
      return {
        ...prevData,
        [inputName]: inputValue
      }
    })
  }

  return (
    <section>
      <h2 className='form-title'>Add a New Card</h2>
      <form onSubmit={submitCardData}>
        <div className='form-inputs'>
          <label htmlFor="cardMessage">Message: </label>
          <input
            onChange={handleCardFormChange}
            type="text"
            name="message"
            id="cardMessage"
            value={cardFormData.message}
          />
          <label htmlFor="cardColor">Card color: </label>
          <input
            onChange={handleCardFormChange}
            type="color"
            name="color"
            id="cardColor"
            value={cardFormData.color}
          />
          <div className='cardForm-preview'>
            <p>Preview: </p>
            <div className='cardForm-preview__card' style={{ backgroundColor: cardFormData.color }}>
              <p>{cardFormData.message}</p>
            </div>
          </div>
        </div>
        <div>
          <button className='form-submit__button' type="submit">Add Card</button>
        </div>
      </form>
    </section>
  )
}

export default CardForm;
