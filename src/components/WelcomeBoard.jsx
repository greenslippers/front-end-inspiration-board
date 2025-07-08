import './styles/WelcomeBoard.css';
import linaImg from '../assets/images/Lina.png';
import natashaImg from '../assets/images/Natasha.png';
import janeImg from '../assets/images/Jane.png';
import colletteImg from '../assets/images/Collette.jpeg';

const welcomeCards = [
  {
    id: 1,
    text: "This is a sticky note that allows for others to vote on your ideas\n\n" +
      "Write anything you want in them\n\n" +
      "Insert your photo and name at the bottom to make it yours",
    author: "Lina",
    avatar: linaImg,
    color: "#fff9c4",
    likes: 1,
    hearts: 6
  },
  {
    id: 2,
    text: "This is a sticky note that allows for others to vote on your ideas\n\n" +
      "Write anything you want in them\n\n" +
      "Insert your photo and name at the bottom to make it yours",
    author: "Natasha",
    avatar: natashaImg,
    color: "#f28b82",
    likes: 1,
    hearts: 6
  },
  {
    id: 3,
    text: `Success is not final, failure is not fatal: it is the courage 
      to continue that counts.
      /Winston Churchill/`,
    author: "Jane",
    avatar: janeImg,
    color: "#aecbfa",
    likes: 1,
    hearts: 6
  },
  {
    id: 4,
    text: "This is a sticky note that allows for others to vote on your ideas\n\n" +
      "Write anything you want in them\n\n" +
      "Insert your photo and name at the bottom to make it yours",
    author: "Collette",
    avatar: colletteImg,
    color: "#fff9c4",
    likes: 1,
    hearts: 6
  }
];

export default function WelcomeBoard() {
  return (
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
                  <p>23❤️</p>
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
  );
}