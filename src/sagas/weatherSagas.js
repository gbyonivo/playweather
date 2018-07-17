import {
  call,
  put,
  all,
  select,
  takeLatest
} from 'redux-saga/effects';
import {
  doneFetchingCurrentWeather,
  doneFetchingForecast,
  errorFetchingCurrentWeather,
  errorFetchingForecast,
} from '../actions';
import { fetchCurrentWeatherFromAPI, fetchForecastFromAPI } from '../api/apiService';
import { FETCH_CURRENT_WEATHER, FETCH_FORECAST } from '../constants/actionTypes';
import { selectActiveLocation } from '../selectors';

export function* fetchCurrentWeatherSaga({ payload: { location } }) {
  try {
    const activeLocation = yield select(selectActiveLocation);
    if (!activeLocation && !location) {
      yield put(doneFetchingCurrentWeather({}));
      return;
    }
    const data = yield call(fetchCurrentWeatherFromAPI, { q: location || activeLocation });
    yield put(doneFetchingCurrentWeather(data));
  } catch (error) {
    yield put(errorFetchingCurrentWeather('error fetching current weather'));
  }
}

export function* fetchForecastSaga({ payload: { location } }) {
  try {
    const activeLocation = yield select(selectActiveLocation);
    if (!activeLocation && !location) {
      yield put(doneFetchingForecast({}));
      return;
    }
    const data = yield call(fetchForecastFromAPI, { q: location || activeLocation });
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
