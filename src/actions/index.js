import {
  FETCH_CURRENT_WEATHER,
  FETCH_FORECAST,
  SELECT_LOCATION,
  DONE_FETCHING_CURRENT_WEATHER,
  DONE_FETCHING_FORECAST,
  ERROR_FETCHING_CURRENT_WEATHER,
  ERROR_FETCHING_FORECAST
} from '../constants/actionTypes';

export const fetchCurrentWeather = () => ({
  type: FETCH_CURRENT_WEATHER
});

export const fetchForecast = () => ({
  type: FETCH_FORECAST
});

export const doneFetchingCurrentWeather = currentWeather => ({
  payload: { currentWeather },
  type: DONE_FETCHING_CURRENT_WEATHER
});

export const doneFetchingForecast = forecast => ({
  payload: { forecast },
  type: DONE_FETCHING_FORECAST
});

export const errorFetchingCurrentWeather = () => ({
  type: ERROR_FETCHING_CURRENT_WEATHER
});

export const errorFetchingForecast = () => ({
  type: ERROR_FETCHING_FORECAST
});

export const selectLocation = location => ({
  payload: { location },
  type: SELECT_LOCATION
});