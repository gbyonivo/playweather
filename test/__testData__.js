export const currentWeather = {
  weather: [],
  cod: 1,
  sys: { sunrise: 1531694193, sunset: 1531694193 },
  main: { humidity: 'x', temp: '10' },
  wind: { speed: '5', deg: '3' }
};

export const forecast = {
  cod: 2,
  list: [
    {
      dt_txt: 'txt',
      weather: [{ icon: '10d', main: 'terav' }],
      main: { temp_min: 9, temp_max: 11, humidity: 10 },
    }
  ]
};