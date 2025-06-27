import PropTypes from 'prop-types';
import './styles/Card.css'

const Card = ({id, cardMessage, likesCounter, cardColor, onCardDelete}) => {
	return (
		<li className="card-item" style={{"--card-bg": cardColor}}>
			<p className="card-item__message">{cardMessage}</p>
			<div className="card-item__controls">
				<button>Like</button>
				<p>{likesCounter}♥️</p>
				<button onClick={() => onCardDelete(id)}>Delete</button>
			</div>
		</li>
	)
}

Card.propTypes = {
	cardMessage: PropTypes.string.isRequired,
	likesCounter: PropTypes.number.isRequired,
	cardColor: PropTypes.string.isRequired,
	onCardDelete: PropTypes.func.isRequired,
}

export default Card;
