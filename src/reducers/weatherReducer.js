import {
  FETCH_CURRENT_WEATHER,
  FETCH_FORECAST,
  DONE_FETCHING_CURRENT_WEATHER,
  DONE_FETCHING_FORECAST,
  ERROR_FETCHING_CURRENT_WEATHER,
  ERROR_FETCHING_FORECAST,
  SELECT_LOCATION,
  IGNORE_FETCH
} from '../constants/actionTypes';

const initialState = {
  locations: [],
  activeLocation: '',
  errorFetchingCurrentWeather: undefined,
  errorFetchingForecast: undefined,
  isFetchingCurrentWeather: false,
  isFetchingForecast: false,
  currentWeather: {},
  forecast: {}
};

const ACTION_HANDLERS = {
  [FETCH_CURRENT_WEATHER]: state => ({
    ...state,
    isFetchingCurrentWeather: true
  }),

  [FETCH_FORECAST]: state => ({
    ...state,
    isFetchingForecast: true
  }),

  [DONE_FETCHING_CURRENT_WEATHER]: (state, { currentWeather }) => ({
    ...state,
    isFetchingCurrentWeather: false,
    currentWeather,
    errorFetchingCurrentWeather: undefined,
    locations: state.locations.includes(`${currentWeather.name}, ${currentWeather.sys.country}`)
      ? state.locations
      : [...state.locations, `${currentWeather.name}, ${currentWeather.sys.country}`],
    activeLocation: `${currentWeather.name}, ${currentWeather.sys.country}`
  }),

  [DONE_FETCHING_FORECAST]: (state, { forecast }) => ({
    ...state,
    isFetchingForecast: false,
    forecast,
    errorFetchingForecast: undefined,
    locations: state.locations.includes(`${forecast.city.name}, ${forecast.city.country}`)
      ? state.locations
      : [...state.locations, `${forecast.city.name}, ${forecast.city.country}`],
    activeLocation: `${forecast.city.name}, ${forecast.city.country}`
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
  }),

  [IGNORE_FETCH]: state => ({
    ...state,
    errorFetchingCurrentWeather: undefined,
    errorFetchingForecast: undefined,
    isFetchingCurrentWeather: false,
    isFetchingForecast: false,
  })
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action.payload) : state;
};
