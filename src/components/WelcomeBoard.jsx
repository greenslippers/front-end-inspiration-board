import { useState } from 'react';
import './styles/WelcomeBoard.css';
import BoardForm from './BoardForm';
import linaImg from '../assets/images/Lina.png';
import natashaImg from '../assets/images/Natasha.png';
import janeImg from '../assets/images/Jane.png';
import colletteImg from '../assets/images/Collette.jpeg';

const welcomeCards = [
  {
    id: 1,
    text:`Just like we go back to our code, we can do the same with ourselves. Let’s pause, reflect, celebrate how far we’ve come, and keep growing from our journey, always staying true to who we are ✨`,
    author: "Lina",
    avatar: linaImg,
    color: "#fff9c4",
    likes: 1,
    hearts: 23
  },
  {
    id: 2,
    text: `Let your hands teach your heart how capable you are.`,
    author: "Natasha",
    avatar: natashaImg,
    color: "#f28b82",
    likes: 1,
    hearts: 23
  },
  {
    id: 3,
    text: `Every master was once a beginner.`,
    author: "Jane",
    avatar: janeImg,
    color: "#aecbfa",
    likes: 1,
    hearts: 23
  },
  {
    id: 4,
    text: `Let the code run free, if it needs to be debugged, it will come back.`,
    author: "Collette",
    avatar: colletteImg,
    color: "#fff9c4",
    likes: 1,
    hearts: 23
  }
];

export default function WelcomeBoard({ onCreateBoard }) {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (boardData) => {
    onCreateBoard(boardData);
    setShowForm(false); // hide form after creating
  };

  return (
    <>
      {/* Grey welcome board */}
      <section className="welcome-board">
        <div className="welcome-board__container">
          <h2 className="welcome-title">Welcome from the Team!</h2>
          <ul className="card-grid">
            {welcomeCards.map(card => (
              <li className="card-item" key={card.id} style={{ "--card-bg": card.color }}>
                <p className="card-item__message">{card.text}</p>
                <div className="card-item__bottom">
                  <div className="card-item__controls">
                    <button>Like</button>
                      <p>{card.hearts}❤️</p>  
                    <button>Delete</button>
                  </div>
                  <div className="welcome-card__footer">
                    <img src={card.avatar} alt={`${card.author} avatar`} className="author-avatar" />
                    <span className="welcome-card__author">{card.author}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* New button BELOW the grey board */}
      <div className="create-button-wrapper">
        {!showForm && (
          <button className="create-board-button" onClick={handleButtonClick}>
            ✨ <strong>Create your first Inspiration board</strong>
          </button>
        )}
        {showForm && <BoardForm onCreateBoard={handleFormSubmit} showFormInitially={true} />}
      </div>
    </>
  );
}
