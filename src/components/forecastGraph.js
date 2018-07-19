import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  LineChart,
  YAxis,
  XAxis,
  Line,
  Tooltip,
  Legend,
  CartesianGrid
} from 'recharts';
import { selectIsFetchingForecast, selectForecast } from '../selectors';

import styles from './forecastGraph.scss';
import { forecastGraphData } from '../functions';

const ForecastGraph = ({ forecast }) => <div className={styles.forecastGraph}>
  {
    forecast.cod && <div>
      <h2>Forecast Line Chart</h2>
      <LineChart width={500} height={300} data={forecastGraphData(forecast)} >
        <XAxis dataKey="day" stroke={'#fff'}/>
        <YAxis stroke={'#fff'} />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#fff" strokeDasharray="1" />
        <Line type="monotone" dataKey="temp" stroke="#82ca9d" />
      </LineChart>
    </div>
  }
</div>;

ForecastGraph.propTypes = {
  forecast: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  forecast: selectForecast(state),
  isFetchingForecast: selectIsFetchingForecast(state),
});

export default connect(mapStateToProps)(ForecastGraph);