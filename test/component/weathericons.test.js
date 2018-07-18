import React from 'react';
import renderer from 'react-test-renderer';
import WeatherIcons from '../../src/components/weatherIcons';

describe('Weather component without test', () => {
  it('renders correctly when isWithText is false', () => {
    const actual = renderer.create(
      <WeatherIcons weather={[{ icon: '10d', main: 'cloudy' }]}/>
    );
    expect(actual).toMatchSnapshot();
  });
});

describe('WeatherIcons component withText', () => {
  it('renders correctly when isWithText is true', () => {
    const actual = renderer.create(
      <WeatherIcons weather={[{ icon: '10d', main: 'cloudy' }]} isWithText/>
    );
    expect(actual).toMatchSnapshot();
  });
});
