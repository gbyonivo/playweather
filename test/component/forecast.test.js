import React from 'react';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Forecast from '../../src/components/forecast';
import combinedReducer from '../../src/reducers';
import pageTypes from '../../src/constants/pageTypes';
import { forecast } from '../__testData__';

const props = {
  fetchData: () => { }
};

const state = {
  errorFetchingCurrentWeather: undefined,
  errorFetchingForecast: undefined,
  isFetchingCurrentWeather: false,
  isFetchingForecast: false,
  activeLocation: 'venice',
  forecast: {}
};

describe('Forecast component', () => {
  it('renders correctly', () => {
    const store = createStore(combinedReducer(), { weatherReducer: state });
    const actual = mount(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey', match: { params: { type: pageTypes.current } } }]}>
        <Provider store={store}>
          <Forecast {...props} />
        </Provider>
      </MemoryRouter>
    );
    expect(actual).toMatchSnapshot();
  });
});

describe('Forecast component', () => {
  it('renders correctly', () => {
    const store = createStore(combinedReducer(), { weatherReducer: { ...state, forecast } });
    const actual = mount(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey', match: { params: { type: pageTypes.current } } }]}>
        <Provider store={store}>
          <Forecast {...props} />
        </Provider>
      </MemoryRouter>
    );
    expect(actual).toMatchSnapshot();
  });
});