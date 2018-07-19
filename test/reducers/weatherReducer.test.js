import weatherReducer from '../../src/reducers/weatherReducer';
import {
  FETCH_CURRENT_WEATHER,
  FETCH_FORECAST,
  DONE_FETCHING_CURRENT_WEATHER,
  DONE_FETCHING_FORECAST,
  ERROR_FETCHING_CURRENT_WEATHER,
  ERROR_FETCHING_FORECAST,
  SELECT_LOCATION,
  IGNORE_FETCH
} from '../../src/constants/actionTypes';

import { currentWeather, forecast } from '../__testData__';


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

describe('FETCH_CURRENT_WEATHER', () => {
  it('should update app state', () => {
    const actual = weatherReducer(initialState, { payload: { location: 'manchester' }, type: FETCH_CURRENT_WEATHER });
    const expected = { ...initialState, isFetchingCurrentWeather: true };
    expect(expected).toMatchObject(actual);
  });
});

describe('FETCH_FORECAST', () => {
  it('should update app state', () => {
    const actual = weatherReducer(initialState, { payload: { location: 'manchester' }, type: FETCH_FORECAST });
    const expected = { ...initialState, isFetchingForecast: true };
    expect(expected).toMatchObject(actual);
  });
});

describe('DONE_FETCHING_CURRENT_WEATHER', () => {
  it('should update app state', () => {
    const actual = weatherReducer(initialState, { payload: { currentWeather }, type: DONE_FETCHING_CURRENT_WEATHER });
    const expected = {
      ...initialState,
      isFetchingCurrentWeather: false,
      currentWeather,
      errorFetchingCurrentWeather: undefined,
      activeLocation: 'Benue, NG',
      locations: ['Benue, NG']
    };
    expect(expected).toMatchObject(actual);
  });
  it('should update app state but ignore updating locations', () => {
    const actual = weatherReducer({ ...initialState, locations: ['Benue, NG'] }, { payload: { currentWeather }, type: DONE_FETCHING_CURRENT_WEATHER });
    const expected = {
      ...initialState,
      isFetchingCurrentWeather: false,
      currentWeather,
      errorFetchingCurrentWeather: undefined,
      activeLocation: 'Benue, NG',
      locations: ['Benue, NG']
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('DONE_FETCHING_FORECAST', () => {
  it('should update app state', () => {
    const actual = weatherReducer(initialState, { payload: { forecast }, type: DONE_FETCHING_FORECAST });
    const expected = {
      ...initialState,
      isFetchingForecast: false,
      forecast,
      errorFetchingForecast: undefined,
      activeLocation: 'Benue, NG',
      locations: ['Benue, NG']
    };
    expect(expected).toMatchObject(actual);
  });
  it('should update app state but ignore updating locations', () => {
    const actual = weatherReducer({ ...initialState, locations: ['Benue, NG'] }, { payload: { forecast }, type: DONE_FETCHING_FORECAST });
    const expected = {
      ...initialState,
      isFetchingForecast: false,
      forecast,
      errorFetchingForecast: undefined,
      activeLocation: 'Benue, NG',
      locations: ['Benue, NG']
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('ERROR_FETCHING_CURRENT_WEATHER', () => {
  it('should update app state', () => {
    const actual = weatherReducer(initialState, { payload: { error: 'error' }, type: ERROR_FETCHING_CURRENT_WEATHER });
    const expected = {
      ...initialState,
      isFetchingCurrentWeather: false,
      errorFetchingCurrentWeather: 'error'
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('ERROR_FETCHING_FORECAST', () => {
  it('should update app state', () => {
    const actual = weatherReducer(initialState, { payload: { error: 'error' }, type: ERROR_FETCHING_FORECAST });
    const expected = {
      ...initialState,
      isFetchingForecast: false,
      errorFetchingForecast: 'error'
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('SELECT_LOCATION', () => {
  it('should update app state', () => {
    const actual = weatherReducer(initialState, { payload: { activeLocation: 'birmingham' }, type: SELECT_LOCATION });
    const expected = {
      ...initialState,
      activeLocation: 'birmingham'
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('IGNORE_FETCH', () => {
  it('should update app state', () => {
    const actual = weatherReducer(initialState, { type: IGNORE_FETCH });
    const expected = { ...initialState };
    expect(expected).toMatchObject(actual);
  });
});