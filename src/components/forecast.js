import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectIsFetchingForecast, selectForecast, selectActiveLocation } from '../selectors';

import styles from './forecast.scss';
import ForecastListItem from './forecastListItem';

const Forecast = ({ forecast, activeLocation }) => <div className={styles.forecast}>
  {
    !forecast.cod
      ? <div className={styles.message}>Type City and Country Code or just City Then Hit Search e.g. Manchester or Manchester, UK</div>
      : <div>
        <h4>{activeLocation}</h4>
        <div className={styles.forecastList}>
          {forecast.list.map(item => <ForecastListItem item={item} key={item.dt}/>)}
        </div>
      </div>
  }
</div>;

Forecast.propTypes = {
  forecast: PropTypes.object.isRequired,
  activeLocation: PropTypes.string,
};

const mapStateToProps = state => ({
  forecast: selectForecast(state),
  isFetchingForecast: selectIsFetchingForecast(state),
  activeLocation: selectActiveLocation(state),
});

export default connect(mapStateToProps)(Forecast);