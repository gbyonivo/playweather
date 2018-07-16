import React from 'react';
import PropTypes from 'prop-types';
import LocationListMenuItem from './locationListMenuItem';

const LocationListMenu = ({ locations }) => <ul>
  {locations.map(location => <LocationListMenuItem key={location} location={location} selectLocation={() => {}}/>)}
</ul>;

LocationListMenu.defaultProps = {
  locations: ['Vader', 'Thanos', 'Titans']
};

LocationListMenu.propTypes = {
  locations: PropTypes.array.isRequired
};

export default LocationListMenu;
