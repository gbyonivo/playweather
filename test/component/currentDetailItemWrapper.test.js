import React from 'react';
import renderer from 'react-test-renderer';
import CurrentDetailItemWrapper from '../../src/components/currentDetailItemWrapper';

describe('CurrentDetailItemWrapper component', () => {
  it('renders correctly', () => {
    const actual = renderer.create(<CurrentDetailItemWrapper headerText={'playweather'} children={<div/>} />);
    expect(actual).toMatchSnapshot();
  });
});