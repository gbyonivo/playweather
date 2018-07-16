import React from 'react';
import PropTypes from 'prop-types';

const LocationListMenuItem = ({ location, selectLocation }) => <li onClick={selectLocation}>
  {location}
</li>;

LocationListMenuItem.propTypes = {
  location: PropTypes.string.isRequired,
  selectLocation: PropTypes.func.isRequired
};

export default LocationListMenuItem;