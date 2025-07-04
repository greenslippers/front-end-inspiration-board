import PropTypes from "prop-types";
import Card from "./Card";

const CardList = ({cards, onDeleteCard, onLikeCard}) => {
  const cardComponents = cards.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        cardMessage = {card.message}
        likesCounter= {card.likesCount}
        cardColor={card.cardColor}
        onDeleteCard={onDeleteCard}
        onLikeCard={onLikeCard}
      />
    );
  });

  return <ul className="card__list no-bullet">{cardComponents}</ul>;
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likesCount: PropTypes.number.isRequired,
      cardColor: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onLikeCard: PropTypes.func.isRequired,
}

export default CardList;