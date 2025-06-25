import PropTypes from "prop-types";
import './styles/FormPopUp.css';

const FormPopUp = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

  return (
    <div className="pop-up__overlay"
      onClick={onClose}>
      <div className="pop-up__content" onClick={(event) => event.stopPropagation()}>
        <button className="pop-up__close" onClick={onClose}>❌</button>
        {children}
      </div>
    </div>
  );
};

FormPopUp.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default FormPopUp;
