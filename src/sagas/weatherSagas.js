import {
  call,
  put,
  all,
  takeLatest
} from 'redux-saga/effects';
import {
  doneFetchingCurrentWeather,
  doneFetchingForecast,
  errorFetchingCurrentWeather,
  errorFetchingForecast
} from '../actions';
import { fetchCurrentWeatherFromAPI, fetchForecastFromAPI } from '../api/apiService';
import { FETCH_CURRENT_WEATHER, FETCH_FORECAST } from '../constants/actionTypes';

export function* fetchCurrentWeatherSaga() {
  try {
    const data = yield call(fetchCurrentWeatherFromAPI, {});
    yield put(doneFetchingCurrentWeather(data));
  } catch (error) {
    yield put(errorFetchingCurrentWeather('error fetching current weather'));
  }
}

export function* fetchForecastSaga() {
  try {
    const data = yield call(fetchForecastFromAPI, {});
    yield put(doneFetchingForecast(data));
  } catch (error) {
    yield put(errorFetchingForecast('error fetching forecast'));
  }
}


export function* sagas() {
  yield all([
    takeLatest(FETCH_CURRENT_WEATHER, fetchCurrentWeatherSaga),
    takeLatest(FETCH_FORECAST, fetchForecastSaga),
    // takeLatest(FINISHED_FETCHING_EVENT, subscribe, OUTCOME)
  ]);
}

export default sagas;