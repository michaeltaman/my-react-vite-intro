import PropTypes from 'prop-types';

function CustomAlert({ style, message, x, y, onClose }) {
  const alertStyle = {
    ...style, // Spread the style prop here
    position: 'fixed',
    top: `${y}px`,
    left: `${x}px`,
    padding: '10px',
    backgroundColor: 'lightblue',
    border: '1px solid blue',
    borderRadius: '5px',
    zIndex: '9999',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Align items at the top
  };

  const closeButtonStyle = {
    cursor: 'pointer',
    border: '1px solid black',
    borderRadius: '2px',
    backgroundColor: 'white',
    marginTop: '-10px', // Adjust the close button position
    marginRight: '-10px',
    padding: '3px', // Adjust padding for the "x"
    fontSize: '9px', // Set the font size of the 'x'
    fontWeight: 'bold',// Set the font weight of the 'x'
    color: 'blue',
  };

  const messageStyle = {
    textAlign: 'center', // Center the text
    flexGrow: 1, // Allow the message to take up all available space
    display: 'flex', // Use flexbox for centering
    justifyContent: 'center', // Center text horizontally within its container
    alignItems: 'center', // Center text vertically within its container
    height: '100%', // Make sure the div takes up the full height of the alert box
  };

  const handleAlertClose = () => {
    onClose(); // Call the onClose function passed via props to handle alert close
  };

  return (
    <div style={alertStyle}>
      <div style={messageStyle}>{message}</div>
      <div style={closeButtonStyle} onClick={handleAlertClose}>
        X
      </div>
    </div>
  );
}

CustomAlert.propTypes = {
  style: PropTypes.object, // Define style as an object
  message: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CustomAlert;
