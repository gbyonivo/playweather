import types from '../constants/pageTypes';

export const selectLocations = ({ weatherReducer: { locations } }) => locations;

export const selectActiveLocation = ({ weatherReducer: { activeLocation } }) => activeLocation;

export const selectIsFetchingCurrentWeather = ({ weatherReducer: { isFetchingCurrentWeather } }) => isFetchingCurrentWeather;

export const selectIsFetchingForecast = ({ weatherReducer: { isFetchingForecast } }) => isFetchingForecast;

export const selectForecast = ({ weatherReducer: { forecast } }) => forecast;

export const selectCurrentWeather = ({ weatherReducer: { currentWeather } }) => currentWeather;

export const selectIsFetching = ({
  weatherReducer: { isFetchingCurrentWeather, isFetchingForecast },
  type
}) => !type || type === types.current || !types[type]
  ? isFetchingCurrentWeather
  : isFetchingForecast;
