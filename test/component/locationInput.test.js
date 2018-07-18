import React from 'react';
import { createStore } from 'redux';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import LocationInput from '../../src/components/locationInput';
import combinedReducer from '../../src/reducers';
import pageTypes from '../../src/constants/pageTypes';

const props = {
  fetchData: () => { }
};

const state = {
  errorFetchingCurrentWeather: undefined,
  errorFetchingForecast: undefined,
  isFetchingCurrentWeather: false,
  isFetchingForecast: false,
};

describe('LocationInput component', () => {
  it('renders correctly', () => {
    const store = createStore(combinedReducer(), { weatherReducer: state });
    const actual = shallow(
      <MemoryRouter initialEntries={[{ pathname: '/', match: { params: { type: pageTypes.current } } }]}>
        <Provider store={store}>
          <LocationInput {...props} />
        </Provider>
      </MemoryRouter>
    ).dive();
    expect(actual).toMatchSnapshot();
  });
});