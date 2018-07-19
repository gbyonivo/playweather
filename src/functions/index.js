export const getDateString = (timestamp) => { // eslint-disable-line
  const date = new Date(timestamp * 1000);
  const hours = `0${date.getHours()}`;
  const mins = `0${date.getMinutes()}`;
  return `${hours.substr(-2)}:${mins.substr(-2)}`;
};
