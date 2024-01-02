import Button from './Button/Button';
import PropTypes from 'prop-types';

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: '1rem' }}>
      <Button
        isActive={active === 'main'}
        onClick={() => {
          onChange('main');
        }}
      >
        Main
      </Button>
      <Button
        isActive={active === 'feedback'}
        onClick={() => {
          onChange('feedback');
        }}
      >
        Feedback
      </Button>
      <Button
        isActive={active === 'effect'}
        onClick={() => {
          onChange('effect');
        }}
      >
        Effect
      </Button>

    </section>
  );
}

TabsSection.propTypes = {
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
