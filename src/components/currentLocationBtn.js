import React from 'react';
import PropTypes from 'prop-types';
import { geolocated } from 'react-geolocated';
import Button from './basicElements/button';

import styles from './currentLocationBtn.scss';

const CurrentLocationBtn = ({
  fetchData,
  isFetching,
  coords,
  isGeolocationAvailable,
  isGeolocationEnabled
}) => <div className={styles.currentLocationBtn}>
  {
    !isGeolocationAvailable // eslint-disable-line
      ? <span>Your browser does not support Geolocation</span>
      : !isGeolocationEnabled // eslint-disable-line
        ? <div>Geolocation is not enabled</div>
        : coords
          ? <Button
            value="Use Current Location"
            isLoading={isFetching}
            onClick={() => { fetchData({ lat: coords.latitude, lon: coords.longitude }); }}
          />
          : <span>Cant Find You Yet</span>
  }
</div>;

CurrentLocationBtn.defaultProps = {
  coords: {}
};

CurrentLocationBtn.propTypes = {
  fetchData: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  coords: PropTypes.object,
  isGeolocationAvailable: PropTypes.bool.isRequired,
  isGeolocationEnabled: PropTypes.bool.isRequired
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(CurrentLocationBtn);