import React from 'react';
import PropTypes from 'prop-types';

import styles from './weatherIcons.scss';

const WeatherIcons = ({ weather, isWithText }) => <div className={styles.weatherIcons}>
  {
    weather.map((weatherData, index) => <div key={`${weatherData.icon}${index}`} className={styles.weatherIcon}>
      { isWithText && <div className={styles.text}>{weatherData.main}</div> }
      <img
        src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
        alt=""
      />
    </div>)
  }
</div>;

WeatherIcons.propTypes = {
  weather: PropTypes.array.isRequired,
  isWithText: PropTypes.bool
};

export default WeatherIcons;