import axios from 'axios';
import {
  HOST,
  FORECAST,
  WEATHER,
  API_KEY
} from '../constants/api';

export const fetchCurrentWeatherFromAPI = params => axios
  .get(`${HOST}/${WEATHER}`, { params: { ...params, appid: API_KEY } })
  .then(response => response.data);

export const fetchForecastFromAPI = params => axios
  .get(`${HOST}/${FORECAST}`, { params: { ...params, appid: API_KEY } })
  .then(response => response.data);