import PropTypes from 'prop-types';
import './styles/Card.css'

const Card = ({cardMessage, likesCounter, cardColor}) => {
	return (
		<li className="card-item" style={{"--card-bg": cardColor}}>
			<p className="card-item__message">{cardMessage}</p>
			<div className="card-item__controls">
				<button>Like</button>
				<p>{likesCounter}♥️</p>
				<button>Delete</button>
			</div>
		</li>
	)
}

Card.propTypes = {
	cardMessage: PropTypes.string.isRequired,
	likesCounter: PropTypes.number.isRequired,
	cardColor: PropTypes.string.isRequired,
}

export default Card;
