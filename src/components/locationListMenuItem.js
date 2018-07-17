import React from 'react';
import PropTypes from 'prop-types';
import styles from './locationListMenuItem.scss';

const LocationListMenuItem = ({ location, selectLocation }) => <li onClick={selectLocation} className={styles.locationListMenuItem}>
  {location}
</li>;

LocationListMenuItem.propTypes = {
  location: PropTypes.string.isRequired,
  selectLocation: PropTypes.func.isRequired
};

export default LocationListMenuItem;