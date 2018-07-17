import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import LocationListMenuItem from './locationListMenuItem';
import { selectLocations } from '../selectors';
import * as actions from '../actions';
import types from '../constants/pageTypes';

const LocationListMenu = ({ locations, fetchData }) => <div>
  <h2>Recently Viewed</h2>
  <ul>
    {locations.map(location => <LocationListMenuItem key={location} location={location} selectLocation={() => fetchData(location)} />)}
  </ul>
</div>;

LocationListMenu.propTypes = {
  locations: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  locations: selectLocations(state)
});

const mapActionsToState = (dispatch, { match: { params: { type } } }) => ({
  fetchData: compose(
    dispatch,
    !type || type === types.current || !types[type] ? actions.fetchCurrentWeather : actions.fetchForecast
  )
});

export default withRouter(connect(mapStateToProps, mapActionsToState)(LocationListMenu));
