import React from 'react';
import renderer from 'react-test-renderer';
import LocationListMenu from '../../src/components/locationListMenuItem';

describe('LocationListMenu component', () => {
  it('renders correctly when isLoading is true', () => {
    const actual = renderer.create(
      <LocationListMenu
        location="play"
        selectLocation={() => {}}
      />
    );
    expect(actual).toMatchSnapshot();
  });
});
