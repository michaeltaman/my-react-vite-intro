import PropTypes from 'prop-types';
import './SearchInput.css';

const SearchInput = ({ value, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value); // Pass the value to parent component
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input search-input"
        placeholder="Search..."
        value={value}
        onChange={handleInputChange}
      />
      <i className="fas fa-search search-icon"></i>
    </div>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
