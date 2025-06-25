import { useState } from 'react';

const kCardFormData = {
  message: '',
  color: '#fff8a5',
};

const NewCardForm = () => {
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
    <form onSubmit={submitCardData}>
      <section>
        <h2>Add a New Card</h2>
        <div>
          <label htmlFor="cardMessage">Message: </label>
          <input
            onChange={handleCardFormChange}
            type="text"
            name="message"
            id="cardMessage"
            value={cardFormData.message}
          />
        </div>
        <div>
          <label htmlFor="cardColor">Card color: </label>
          <input
            onChange={handleCardFormChange}
            type="color"
            name="color"
            id="cardColor"
            value={cardFormData.color}
          />
        </div>
        <div>
          <p>Preview: </p>
          <div style={{ backgroundColor: cardFormData.color }}>
            <p>{cardFormData.message}</p>
          </div>
        </div>
        <div>
          <button type="submit">Add Card</button>
        </div>
      </section>
    </form>
  )
}

export default NewCardForm;
