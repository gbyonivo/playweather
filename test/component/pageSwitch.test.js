import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import PageSwitch from '../../src/components/pageSwitch';
import combinedReducer from '../../src/reducers';
import pageTypes from '../../src/constants/pageTypes';

const props = {
  fetchData: () => { },
  text: 'scorpion',
  linkTo: 'scorpion king'
};


describe('PageSwitch component without test', () => {
  it('renders correctly', () => {
    const store = createStore(combinedReducer(), { weatherReducer: { activeLocation: 'machetser, uk' } });
    const actual = renderer.create(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
        <Provider store={store}>
          <PageSwitch {...props} />
        </Provider>
      </MemoryRouter>
    );
    expect(actual).toMatchSnapshot();
  });
});

describe('PageSwitch component without test', () => {
  it('renders correctly', () => {
    const store = createStore(combinedReducer(), { weatherReducer: { activeLocation: 'machetser, uk' } });
    const actual = renderer.create(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey', match: { params: { type: pageTypes.current } } }]}>
        <Provider store={store}>
          <PageSwitch {...props} />
        </Provider>
      </MemoryRouter>
    );
    expect(actual).toMatchSnapshot();
  });
});