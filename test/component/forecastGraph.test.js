import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ForecastGraph from '../../src/components/forecastGraph';
import combinedReducer from '../../src/reducers';
import { forecast } from '../__testData__';

const props = {
  fetchData: () => { },
  text: 'scorpion',
  linkTo: 'scorpion king'
};


describe('ForecastGraph component without test', () => {
  it('renders correctly', () => {
    const store = createStore(combinedReducer(), { weatherReducer: { activeLocation: 'machetser, uk', forecast } });
    const actual = renderer.create(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
        <Provider store={store}>
          <ForecastGraph {...props} />
        </Provider>
      </MemoryRouter>
    );
    expect(actual).toMatchSnapshot();
  });
});