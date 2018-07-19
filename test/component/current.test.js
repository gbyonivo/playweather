import React from 'react';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Current from '../../src/components/current';
import combinedReducer from '../../src/reducers';
import pageTypes from '../../src/constants/pageTypes';
import { currentWeather } from '../__testData__';

const props = {
  fetchData: () => { }
};

const state = {
  errorFetchingCurrentWeather: undefined,
  errorFetchingForecast: undefined,
  isFetchingCurrentWeather: false,
  isFetchingForecast: false,
  activeLocation: 'venice',
  currentWeather: {}
};

describe('Current component', () => {
  it('renders correctly', () => {
    const store = createStore(combinedReducer(), { weatherReducer: state });
    const actual = mount(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey', match: { params: { type: pageTypes.current } } }]}>
        <Provider store={store}>
          <Current {...props} />
        </Provider>
      </MemoryRouter>
    );
    expect(actual).toMatchSnapshot();
  });
});

describe('Current component', () => {
  it('renders correctly', () => {
    const store = createStore(combinedReducer(), { weatherReducer: { ...state, currentWeather } });
    const actual = mount(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey', match: { params: { type: pageTypes.current } } }]}>
        <Provider store={store}>
          <Current {...props} />
        </Provider>
      </MemoryRouter>
    );
    expect(actual).toMatchSnapshot();
  });
});