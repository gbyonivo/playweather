import {
  FETCH_CURRENT_WEATHER,
  FETCH_FORECAST,
  DONE_FETCHING_CURRENT_WEATHER,
  DONE_FETCHING_FORECAST,
  ERROR_FETCHING_CURRENT_WEATHER,
  ERROR_FETCHING_FORECAST,
  SELECT_LOCATION
} from '../constants/actionTypes';

const initialState = {
  locations: [],
  activeLocation: undefined,
  errorFetchingCurrentWeather: undefined,
  errorFetchingForecast: undefined,
  isFetchingCurrentWeather: false,
  isFetchingForecast: false,
  currentWeather: undefined,
  forecast: undefined
};

const ACTION_HANDLERS = {
  [FETCH_CURRENT_WEATHER]: (state, { location }) => ({
    ...state,
    isFetchingCurrentWeather: true,
    activeLocation: location
  }),

  [FETCH_FORECAST]: (state, { location }) => ({
    ...state,
    isFetchingForecast: true,
    activeLocation: location
  }),

  [DONE_FETCHING_CURRENT_WEATHER]: (state, { currentWeather }) => ({
    ...state,
    isFetchingCurrentWeather: false,
    currentWeather,
    errorFetchingCurrentWeather: undefined
  }),

  [DONE_FETCHING_FORECAST]: (state, { forecast }) => ({
    ...state,
    isFetchingForecast: false,
    forecast,
    errorFetchingForecast: undefined
  }),

  [ERROR_FETCHING_CURRENT_WEATHER]: (state, { error: errorFetchingCurrentWeather }) => ({
    ...state,
    isFetchingCurrentWeather: false,
    errorFetchingCurrentWeather
  }),

  [ERROR_FETCHING_FORECAST]: (state, { error: errorFetchingForecast }) => ({
    ...state,
    isFetchingForecast: false,
    errorFetchingForecast
  }),

  [SELECT_LOCATION]: (state, { activeLocation }) => ({
    ...state,
    activeLocation
  })
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action.payload) : state;
};
