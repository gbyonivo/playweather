import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  isLoading,
  onClick,
  value
}) => <div>
  {
    isLoading
      ? <span>loading</span>
      : <button onClick={onClick}>
        {value}
      </button>
  }
</div>;

Button.propTypes = {
  isLoading: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;