import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectIsFetchingForecast, selectForecast } from '../selectors';

import styles from './forecast.scss';

const Forecast = ({ forecast }) => <div className={styles.forecast}>
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