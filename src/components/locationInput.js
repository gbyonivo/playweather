import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TextInput from './basicElements/textInput';
import Button from './basicElements/button';

class LocationInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
    this.setLocation = this.setLocation.bind(this);
  }

  setLocation(location) {
    this.setState(() => ({
      location
    }));
  }

  render() {
    const { location } = this.state;
    return (<div>
      <TextInput
        value={location}
        onChange={this.setLocation}
        label="Location"
        name="location"
        placeholder="Manchester, United Kingdom"
      />
      <Button
        value="GO"
        isLoading={false}
        onClick={() => {}}
      />
      <a>use current location</a>
    </div>);
  }
}

export default LocationInput;
