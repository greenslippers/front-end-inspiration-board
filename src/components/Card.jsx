import PropTypes from 'prop-types';
import './styles/Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Card = ({id, cardMessage, likesCounter, cardColor, onDeleteCard, onLikeCard }) => {
	return (
		<li className="card-item" style={{"--card-bg": cardColor}}>
			<p className="card-item__message">{cardMessage}</p>
			<div className="card-item__controls">
				<button onClick={()=> onLikeCard(id)}><FontAwesomeIcon icon={faThumbsUp} style={{color: "#080808",}} /> 1</button>
				<p>{likesCounter} <FontAwesomeIcon icon={faHeart} size="lg" style={{color: "#c40e17",}} /></p>
				<button onClick={() => onDeleteCard(id)}><FontAwesomeIcon icon={faTrash} style={{color: "#161717",}} /></button>
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
