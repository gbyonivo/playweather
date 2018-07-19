import {
  fetchCurrentWeather,
  fetchForecast,
  doneFetchingCurrentWeather,
  doneFetchingForecast,
  errorFetchingCurrentWeather,
  errorFetchingForecast,
  selectLocation,
  ingnoreFetch
} from '../../src/actions';
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

describe('fetchCurrentWeather', () => {
  it('should return payload and type', () => {
    const actual = fetchCurrentWeather('manchester');
    const expected = {
      type: FETCH_CURRENT_WEATHER,
      payload: { location: 'manchester' }
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('fetchForecast', () => {
  it('should return payload and type', () => {
    const actual = fetchForecast('manchester');
    const expected = {
      type: FETCH_FORECAST,
      payload: { location: 'manchester' }
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('doneFetchingCurrentWeather', () => {
  it('should return payload and type', () => {
    const actual = doneFetchingCurrentWeather('x');
    const expected = {
      type: DONE_FETCHING_CURRENT_WEATHER,
      payload: { currentWeather: 'x' }
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('doneFetchingForecast', () => {
  it('should return payload and type', () => {
    const actual = doneFetchingForecast('x');
    const expected = {
      type: DONE_FETCHING_FORECAST,
      payload: { forecast: 'x' }
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('errorFetchingCurrentWeather', () => {
  it('should return payload and type', () => {
    const actual = errorFetchingCurrentWeather('x');
    const expected = {
      type: ERROR_FETCHING_CURRENT_WEATHER,
      payload: { error: 'x' }
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('errorFetchingForecast', () => {
  it('should return payload and type', () => {
    const actual = errorFetchingForecast('x');
    const expected = {
      type: ERROR_FETCHING_FORECAST,
      payload: { error: 'x' }
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('ingnoreFetch', () => {
  it('should return payload and type', () => {
    const actual = ingnoreFetch();
    const expected = {
      type: IGNORE_FETCH
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('selectLocation', () => {
  it('should return payload and type', () => {
    const actual = selectLocation('x');
    const expected = {
      type: SELECT_LOCATION,
      payload: { location: 'x' }
    };
    expect(expected).toMatchObject(actual);
  });
});