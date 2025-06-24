import PropTypes from 'prop-types';
import './Card.css'

const Card = ({cardMessage, likesCounter}) => {
	return (
		<div className="card-item">
			<p className="card-item__message">{cardMessage}</p>
			<div className="card-item__controls">
				<button>Like</button>
				<p>{likesCounter}♥️</p>
				<button>Delete</button>
			</div>
		</div>
	)
}

Card.propTypes = {
	cardMessage: PropTypes.string.isRequired,
	likesCounter: PropTypes.number.isRequired,
}

export default Card;
