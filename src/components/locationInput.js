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

import styles from './locationInput.scss';
import pageTypes from '../constants/pageTypes';

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

  fetchData(currentLocation) {
    const { location } = this.state;
    const { fetchData } = this.props;
    if (!currentLocation && location.length === 0) {
      this.setState(() => ({ inputError: 'location cant be empty' }));
      return;
    }
    fetchData(currentLocation || location);
    this.setState(() => ({ inputError: undefined }));
  }

  render() {
    const { location, inputError } = this.state;
    const {
      isFetching,
      errorFetching
    } = this.props;
    return (<div className={styles.locationInput}>
      <div>
        <TextInput
          value={location}
          onChange={this.setLocation}
          label="Location"
          name="location"
          placeholder="City, Country"
        />
        {
          (inputError || errorFetching) && <div className={styles.error}>{inputError || errorFetching}</div>
        }
      </div>
      <Button
        value="SEARCH"
        isLoading={isFetching}
        onClick={() => { this.fetchData(location); }}
      />
      <CurrentLocationButton
        isFetching={isFetching}
        fetchData={this.fetchData}
      />
    </div>);
  }
}

LocationInput.propTypes = {
  fetchData: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorFetching: PropTypes.string
};

const mapStateToProps = (state, { match: { params: { type } } }) => ({
  isFetching: selectIsFetching(state, type),
  errorFetching: selectErrorFetching(state, type)
});

const mapActionsToProps = (dispatch, { match: { params: { type } } }) => ({
  fetchData: compose(
    dispatch,
    type === pageTypes.current ? actions.fetchCurrentWeather : actions.fetchForecast
  )
});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(LocationInput));
