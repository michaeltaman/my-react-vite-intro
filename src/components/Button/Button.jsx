import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ children, isActive, ...props }) {
  return (
    <button
      {...props}
      className={isActive ? `${styles.button} ${styles.active}` : styles.button}
    >
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
}