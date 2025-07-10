import './styles/WelcomeBoard.css';

import BoardForm from './BoardForm';
import FormPopUp from './FormPopUp';

import linaImg from '../assets/images/Lina.png';
import natashaImg from '../assets/images/Natasha.png';
import janeImg from '../assets/images/Jane.png';
import colletteImg from '../assets/images/Collette.jpeg';

const welcomeCards = [
  {
    id: 1,
    text:`Let’s pause, reflect, celebrate how far we’ve come, and keep growing from our journey, always staying true to who we are.`,
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

export default function WelcomeBoard({ onCreateBoard, isPopUpOpen, setIsPopUpOpen }) {
  const handleFormSubmit = (boardData) => {
    onCreateBoard(boardData);
  };

  return (
    <section className="welcome-board">
      <div className="welcome-board__container">
        <h2 className="welcome-title">Welcome from the Team!</h2>

        <ul className="card-grid">
          {welcomeCards.map((card) => (
            <li
              key={card.id}
              className="welcome-card__item"
              style={{ "--card-bg": card.color }}
            >
              <p className="card-item__message">{card.text}</p>
              <div className="card-item__bottom">
                <div className="card-item__controls">
                  <button disabled={true}>Like</button>
                  <p>{card.hearts}❤️</p>
                  <button disabled={true}>Delete</button>
                </div>
                <div className="welcome-card__footer">
                  <img
                    src={card.avatar}
                    alt={`${card.author} avatar`}
                    className="author-avatar"
                  />
                  <span className="welcome-card__author">{card.author}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="create-button-wrapper">
          <button
            className="create-board-button"
            onClick={() => setIsPopUpOpen(true)}
          >
            ✨ Create your first Inspiration board
          </button>

          <FormPopUp
            isOpen={isPopUpOpen}
            onClose={() => setIsPopUpOpen(false)}
          >
            <BoardForm onCreateBoard={handleFormSubmit} />
          </FormPopUp>
        </div>
      </div>
    </section>
  );
}
