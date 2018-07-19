import React from 'react';
import renderer from 'react-test-renderer';
import attachList from '../../src/hocs/attachList';
import pageTypes from '../../src/constants/pageTypes';
import Button from '../../src/components/basicElements/button';

const buttonProps = {
  value: 'clickme',
  isLoading: false,
  onClick: () => {}
};

describe('attachList Hoc', () => {
  it('should return component', () => {
    const actual = renderer.create(attachList(<Button {...buttonProps}/>, pageTypes.current));
    expect(actual).toMatchSnapshot();
  });
});