import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  value,
  onChange,
  label,
  placeholder,
  name
}) => <div>
  <label htmlFor={name}></label>
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={e => onChange(e.target.value, name)}
    name={name}
  />
</div>;

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default TextInput;