import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectIsFetchingCurrentWeather, selectCurrentWeather } from '../selectors';

const Forecast = ({ currentWeather }) => <div>
  {currentWeather.cod ? `current-${currentWeather.cod}` : 'currentWeather'}
</div>;

Forecast.propTypes = {
  currentWeather: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currentWeather: selectCurrentWeather(state),
  isFetchingCurrentWeather: selectIsFetchingCurrentWeather(state)
});

export default connect(mapStateToProps)(Forecast);