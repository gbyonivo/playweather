import React from 'react';
import PropTypes from 'prop-types';

const WeatherIcons = ({ weather }) => <span>
  {
    weather.map((weatherData, index) => <img
      src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
      alt=""
      key={`${weatherData.icon}${index}`}
    />)
  }
</span>;

WeatherIcons.propTypes = {
  weather: PropTypes.array.isRequired
};

export default WeatherIcons;