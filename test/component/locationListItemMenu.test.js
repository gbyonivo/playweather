import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import LocationListMenu from '../../src/components/locationListMenu';
import combinedReducer from '../../src/reducers';
import pageTypes from '../../src/constants/pageTypes';

const props = {
  fetchData: () => { }
};

describe('LocationListMenu component without test', () => {
  it('renders correctly', () => {
    const store = createStore(combinedReducer(), { weatherReducer: { locations: ['machetser, uk'] } });
    const actual = renderer.create(
      <MemoryRouter initialEntries={[{ pathname: '/', match: { params: { type: pageTypes.current } } }]}>
        <Provider store={store}>
          <LocationListMenu {...props} />
        </Provider>
      </MemoryRouter>
    );
    expect(actual).toMatchSnapshot();
  });
});