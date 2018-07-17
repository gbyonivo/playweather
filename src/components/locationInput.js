import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TextInput from './basicElements/textInput';
import Button from './basicElements/button';
import CurrentLocationButton from './currentLocationBtn';
import { selectIsFetching } from '../selectors';
import * as actions from '../actions';
import types from '../constants/pageTypes';

class LocationInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
    this.setLocation = this.setLocation.bind(this);
  }

  setLocation(location) {
    this.setState(() => ({ location }));
  }

  render() {
    const { location } = this.state;
    const { isFetching, fetchData } = this.props;
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
        isLoading={isFetching}
        onClick={() => { fetchData(location); }}
      />
      <CurrentLocationButton
        isFetching={isFetching}
        fetchData={fetchData}
      />
    </div>);
  }
}

LocationInput.propTypes = {
  fetchData: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, { match: { params: { type } } }) => ({
  isFetching: selectIsFetching(state, type)
});

const mapActionsToProps = (dispatch, { match: { params: { type } } }) => ({
  fetchData: compose(
    dispatch,
    !type || type === types.current || !types[type] ? actions.fetchCurrentWeather : actions.fetchForecast
  )
});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(LocationInput));
