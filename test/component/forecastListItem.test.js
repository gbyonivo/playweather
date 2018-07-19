import React from 'react';
import renderer from 'react-test-renderer';
import ForecastListItem from '../../src/components/forecastListItem';

describe('ForecastListItem component', () => {
  it('renders correctly', () => {
    const actual = renderer.create(
      <ForecastListItem
        item={{ main: { temp_min: '', temp_max: '', humidity: '' }, weather: [], dt_txt: 'dttxt' }}
      />
    );
    expect(actual).toMatchSnapshot();
  });
});
