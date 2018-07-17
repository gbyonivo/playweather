import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TextInput from './basicElements/textInput';
import Button from './basicElements/button';
import CurrentLocationButton from './currentLocationBtn';
import { selectIsFetching, selectErrorFetching } from '../selectors';
import * as actions from '../actions';
import types from '../constants/pageTypes';

import styles from './locationInput.scss';

class LocationInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      inputError: undefined
    };
    this.setLocation = this.setLocation.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  setLocation(location) {
    this.setState(() => ({ location }));
  }

  fetchData() {
    const { location } = this.state;
    if (location.length === 0) {
      this.setState(() => ({ inputError: 'location cant be empty' }));
      return;
    }
    this.props.fetchData(location);
    this.setState(() => ({ inputError: undefined }));
  }

  render() {
    const { location, inputError } = this.state;
    const { isFetching, fetchData, errorFetching } = this.props;
    return (<div className={styles.locationInput}>
      <TextInput
        value={location}
        onChange={this.setLocation}
        label="Location"
        name="location"
        placeholder="Manchester, United Kingdom"
      />
      {
        (inputError || errorFetching) && <div className={styles.error}>{inputError || errorFetching}</div>
      }
      <Button
        value="SEARCH"
        isLoading={isFetching}
        onClick={() => { this.fetchData(location); }}
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
  errorFetching: PropTypes.string,
};

const mapStateToProps = (state, { match: { params: { type } } }) => ({
  isFetching: selectIsFetching(state, type),
  errorFetching: selectErrorFetching(state, type)
});

const mapActionsToProps = (dispatch, { match: { params: { type } } }) => ({
  fetchData: compose(
    dispatch,
    !type || type === types.current || !types[type] ? actions.fetchCurrentWeather : actions.fetchForecast
  )
});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(LocationInput));
