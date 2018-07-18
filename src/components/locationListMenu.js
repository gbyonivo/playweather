import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import LocationListMenuItem from './locationListMenuItem';
import { selectLocations } from '../selectors';
import * as actions from '../actions';
import pageTypes from '../constants/pageTypes';

import styles from './locationListMenu.scss';

const LocationListMenu = ({ locations, fetchData }) => <div className={styles.locationListMenu}>
  <h2>Recently Viewed</h2>
  {
    locations.length > 0
      ? <ul>
        {locations.map(location => <LocationListMenuItem key={location} location={location} selectLocation={() => fetchData(location)} />)}
      </ul>
      : <em>no recent search</em>
  }
</div>;

LocationListMenu.propTypes = {
  locations: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  locations: selectLocations(state)
});

const mapActionsToState = (dispatch, { pageType }) => ({
  fetchData: compose(
    dispatch, pageType === pageTypes.current ? actions.fetchCurrentWeather : actions.fetchForecast
  )
});

export default withRouter(connect(mapStateToProps, mapActionsToState)(LocationListMenu));
