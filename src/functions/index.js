export const getDateString = (timestamp) => { // eslint-disable-line
  const date = new Date(timestamp * 1000);
  const hours = `0${date.getHours()}`;
  const mins = `0${date.getMinutes()}`;
  return `${hours.substr(-2)}:${mins.substr(-2)}`;
};

export const groupForecastByDay = forecast => forecast.list.reduce(
  (acc, curr) => ({ ...acc, ...{ [`${curr.dt_txt.split('-')[1]}/${curr.dt_txt.split('-')[2].substr(0, 2)}`]: curr } }), {}
);

export const forecastGraphData = (forecast) => {
  const forecastByDayMap = groupForecastByDay(forecast);
  return Object.keys(forecastByDayMap).map(key => ({
    day: key,
    temp: forecastByDayMap[key].main.temp
  }));
};