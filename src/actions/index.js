import {
  FETCH_CURRENT_WEATHER,
  FETCH_FORECAST,
  SELECT_LOCATION,
  DONE_FETCHING_CURRENT_WEATHER,
  DONE_FETCHING_FORECAST,
  ERROR_FETCHING_CURRENT_WEATHER,
  ERROR_FETCHING_FORECAST,
  IGNORE_FETCH
} from '../constants/actionTypes';

export const fetchCurrentWeather = location => ({
  type: FETCH_CURRENT_WEATHER,
  payload: { location }
});

export const fetchForecast = location => ({
  type: FETCH_FORECAST,
  payload: { location }
});

export const doneFetchingCurrentWeather = currentWeather => ({
  payload: { currentWeather },
  type: DONE_FETCHING_CURRENT_WEATHER
});

export const doneFetchingForecast = forecast => ({
  payload: { forecast },
  type: DONE_FETCHING_FORECAST
});

export const errorFetchingCurrentWeather = error => ({
  type: ERROR_FETCHING_CURRENT_WEATHER,
  payload: { error }
});

export const errorFetchingForecast = error => ({
  type: ERROR_FETCHING_FORECAST,
  payload: { error }
});

export const ingnoreFetch = () => ({
  type: IGNORE_FETCH
});

export const selectLocation = location => ({
  payload: { location },
  type: SELECT_LOCATION
});