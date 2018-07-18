import React from 'react';
import PropTypes from 'prop-types';

import styles from './forecastListItem.scss';
import WeatherIcons from './weatherIcons';

const ForecastListItem = ({ item }) => <div className={styles.forecastListItem}>
  <h4>{item.dt_txt}</h4>
  <div className={styles.weatherIcons}><WeatherIcons weather={item.weather}/></div>
  <div>temp-min: {item.main.temp_min}</div>
  <div>temp-max: {item.main.temp_max}</div>
  <div>humidity: {item.main.humidity}</div>
</div>;

ForecastListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ForecastListItem;