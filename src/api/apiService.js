import axios from 'axios';
import { HOST, FORECAST, WEATHER } from '../constants/api';

export const fetchCurrentWeatherFromAPI = params => axios
  .get(`${HOST}/${WEATHER}`, { params })
  .then(response => response.data);

export const fetchForecastFromAPI = params => axios
  .get(`${HOST}/${FORECAST}`, { params })
  .then(response => response.data);