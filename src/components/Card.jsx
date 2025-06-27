import PropTypes from 'prop-types';
import './styles/Card.css'

const Card = ({id, cardMessage, likesCounter, cardColor, onDeleteCard, onLikeCard }) => {
	return (
		<li className="card-item" style={{"--card-bg": cardColor}}>
			<p className="card-item__message">{cardMessage}</p>
			<div className="card-item__controls">
				<button onClick={()=> onLikeCard}>Like</button>
				<p>{likesCounter}♥️</p>
				<button onClick={() => onDeleteCard(id)}>Delete</button>
			</div>
		</li>
	)
}

Card.propTypes = {
	cardMessage: PropTypes.string.isRequired,
	likesCounter: PropTypes.number.isRequired,
	cardColor: PropTypes.string.isRequired,
	onDeleteCard: PropTypes.func.isRequired,
	onLikeCard: PropTypes.func.isRequired,
}

export default Card;
