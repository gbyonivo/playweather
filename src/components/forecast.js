import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectIsFetchingForecast, selectForecast } from '../selectors';

const Forecast = ({ forecast }) => <div>
  {forecast.cod ? `forecast-${forecast.cod}` : 'forecasts'}
</div>;

Forecast.propTypes = {
  forecast: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  forecast: selectForecast(state),
  isFetchingForecast: selectIsFetchingForecast(state)
});

export default connect(mapStateToProps)(Forecast);