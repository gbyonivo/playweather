import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectIsFetchingCurrentWeather, selectCurrentWeather, selectActiveLocation } from '../selectors';

import styles from './current.scss';
import WeatherIcons from './weatherIcons';
import DIW from './currentDetailItemWrapper';
import { getDateString } from '../functions';


const CurrentWeather = ({ currentWeather, activeLocation }) => <div className={styles.current}>
  {
    !currentWeather.cod
      ? <div className={styles.message}>Type City and Country Code or just City Then Hit Search e.g. Manchester or Manchester, UK</div>
      : <div>
        <h4>{activeLocation}</h4>
        <div className={styles.currentWeatherDetails}>
          <DIW headerText="Cloudiness">
            <WeatherIcons weather={currentWeather.weather} isWithText />
          </DIW>
          <DIW headerText="Temperature">
            <div className={styles.temperature}>{currentWeather.main.temp}</div>
          </DIW>
          <DIW headerText="Wind">
            <div>
              <div className={styles.windSpeed}><em>spd</em>{currentWeather.wind.speed}</div>
              <div className={styles.windDeg}><em>dir</em>{currentWeather.wind.deg || 'None'}</div>
            </div>
          </DIW>
          <DIW headerText="Humidity">
            <div className={styles.humidity}>{currentWeather.main.humidity}</div>
          </DIW>
          <DIW headerText="Sunrise">
            <div className={styles.sunrise}>{getDateString(currentWeather.sys.sunrise)}</div>
          </DIW>
          <DIW headerText="Sunset">
            <div className={styles.sunset}>{getDateString(currentWeather.sys.sunset)}</div>
          </DIW>
        </div>
      </div>
  }
</div>;

CurrentWeather.propTypes = {
  currentWeather: PropTypes.object.isRequired,
  activeLocation: PropTypes.string
};

const mapStateToProps = state => ({
  currentWeather: selectCurrentWeather(state),
  isFetchingCurrentWeather: selectIsFetchingCurrentWeather(state),
  activeLocation: selectActiveLocation(state)
});

export default connect(mapStateToProps)(CurrentWeather);