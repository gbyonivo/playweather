import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { fetchCurrentWeatherSaga, fetchForecastSaga, sagas } from '../../src/sagas/weatherSagas';
import { fetchCurrentWeatherFromAPI, fetchForecastFromAPI } from '../../src/api/apiService';
import { doneFetchingCurrentWeather, ingnoreFetch, doneFetchingForecast } from '../../src/actions';
import { selectActiveLocation } from '../../src/selectors';

import { currentWeather, forecast } from '../__testData__';
import { FETCH_CURRENT_WEATHER, FETCH_FORECAST } from '../../src/constants/actionTypes';

describe('fetchCurrentWeatherSaga', () => {
  it('should call fetchCurrentWeatherFromAPI and doneFetchingCurrentWeather', () => {
    const payload = { payload: { location: 'Ekiti' } };
    const gen = fetchCurrentWeatherSaga(payload);
    const actual = [
      gen.next(),
      gen.next(undefined),
      gen.next(currentWeather),
      gen.next(),
    ];
    const expected = [
      { done: false, value: select(selectActiveLocation) },
      { done: false, value: call(fetchCurrentWeatherFromAPI, { q: 'Ekiti' }) },
      { done: false, value: put(doneFetchingCurrentWeather(currentWeather)) },
      { done: true, value: undefined }
    ];
    expect(actual).toEqual(expected);
  });
  it('should call ignoreFetch if location is undefined', () => {
    const payload = { payload: { } };
    const gen = fetchCurrentWeatherSaga(payload);
    const actual = [
      gen.next(),
      gen.next(undefined),
      gen.next(),
    ];
    const expected = [
      { done: false, value: select(selectActiveLocation) },
      { done: false, value: put(ingnoreFetch()) },
      { done: true, value: undefined }
    ];
    expect(actual).toEqual(expected);
  });
});

describe('fetchCurrentWeatherSaga', () => {
  it('should call fetchForecastFromAPI and doneFetchingForecast', () => {
    const payload = { payload: { location: 'Ekiti' } };
    const gen = fetchForecastSaga(payload);
    const actual = [
      gen.next(),
      gen.next(undefined),
      gen.next(forecast),
      gen.next(),
    ];
    const expected = [
      { done: false, value: select(selectActiveLocation) },
      { done: false, value: call(fetchForecastFromAPI, { q: 'Ekiti' }) },
      { done: false, value: put(doneFetchingForecast(forecast)) },
      { done: true, value: undefined }
    ];
    expect(actual).toEqual(expected);
  });
  it('should call ignoreFetch if location is undefined', () => {
    const payload = { payload: { } };
    const gen = fetchForecastSaga(payload);
    const actual = [
      gen.next(),
      gen.next(undefined),
      gen.next(),
    ];
    const expected = [
      { done: false, value: select(selectActiveLocation) },
      { done: false, value: put(ingnoreFetch()) },
      { done: true, value: undefined }
    ];
    expect(actual).toEqual(expected);
  });
});

describe('sagas', () => {
  it('', () => {
    const gen = sagas();
    const actual = [
      gen.next(),
      gen.next()
    ];

    const expected = [
      {
        done: false,
        value: all([
          takeLatest(FETCH_CURRENT_WEATHER, fetchCurrentWeatherSaga),
          takeLatest(FETCH_FORECAST, fetchForecastSaga)
        ])
      },
      { done: true, value: undefined }
    ];
    expect(actual).toEqual(expected);
  });
});

