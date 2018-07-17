import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectIsFetchingCurrentWeather, selectCurrentWeather } from '../selectors';

import styles from './current.scss';

const Forecast = ({ currentWeather }) => <div className={styles.current}>
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