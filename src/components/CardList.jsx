import PropTypes from "prop-types";
import Card from "./Card";

const CardList = ({cards}) => {
  const cardComponents = cards.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        cardMessage = {card.message}
        likesCounter= {card.likesCount}
      />
    );
  });

  return <ul className="card__list no-bullet">{cardComponents}</ul>;
};

export default CardList;