import {
  FETCH_CURRENT_WEATHER,
  FETCH_FORECAST,
  DONE_FETCHING_CURRENT_WEATHER,
  DONE_FETCHING_FORECAST,
  SELECT_LOCATION
} from '../constants/actionTypes';

const initialState = {
  locations: [],
  activeLocation: undefined,
  errors: {},
  isFetchingCurrentWeather: false,
  isFetchingForecast: false,
};

const ACTION_HANDLERS = {
  [FETCH_CURRENT_WEATHER]: state => ({ ...state, isFetchingCurrentWeather: true }),
  [FETCH_FORECAST]: state => ({ ...state, isFetchingForecast: true }),
  [DONE_FETCHING_CURRENT_WEATHER]: (state, { weather }) => ({ ...state, isFetchingCurrentWeather: false, weather }),
  [DONE_FETCHING_FORECAST]: (state, { forecast }) => ({ ...state, isFetchingForecast: false, forecast }),
  [SELECT_LOCATION]: (state, { activeLocation }) => ({ ...state, activeLocation })
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action.payload) : state;
};
