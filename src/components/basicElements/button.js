import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.scss';

const Button = ({
  isLoading,
  onClick,
  value
}) => <div className={styles.buttonDiv}>
  {
    <button onClick={onClick} disabled={isLoading}>
      {`${value}${isLoading ? '...' : ''}`}
    </button>
  }
</div>;

Button.propTypes = {
  isLoading: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;