import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import CurrentLocationBtn from '../../src/components/currentLocationBtn';

describe('Button component', () => {
  it('renders correctly when isLoading is true', () => {
    const actual = shallow(
      <Provider>
        <CurrentLocationBtn
          isFetching={false}
          fetchData={() => { }}
        />
      </Provider>
    );
    expect(actual).toMatchSnapshot();
  });
});