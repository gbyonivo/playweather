import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';
import types from '../constants/pageTypes';
import { selectActiveLocation } from '../selectors';

const PageSwitch = ({
  fetchData,
  text,
  linkTo,
  activeLocation
}) => <Link to={linkTo}>
  <div onClick={() => fetchData(activeLocation)}>{text}</div>
</Link>;

PageSwitch.propTypes = {
  fetchData: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  activeLocation: PropTypes.string
};

const mapStateToProps = (state, { match: { params: { type } } }) => ({
  text: type === types.current ? 'See Forecast' : 'See Current Weather',
  linkTo: !type || type === types.current || !types[type] ? 'forecast' : 'current',
  activeLocation: selectActiveLocation(state)
});

const mapActionsToProps = (dispatch, { match: { params: { type } } }) => ({
  fetchData: compose(
    dispatch,
    type === types.current ? actions.fetchForecast : actions.fetchCurrentWeather
  )
});
export default withRouter(connect(mapStateToProps, mapActionsToProps)(PageSwitch));