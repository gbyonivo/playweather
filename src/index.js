import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import LocationInput from './components/locationInput';
import reducer from './reducers';
import rootSaga from './sagas';
import Forecast from './components/forecast';
import Current from './components/current';
import PageSwitch from './components/pageSwitch';
import pageTypes from './constants/pageTypes';

import './index.scss';
import attachList from './hocs/attachList';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer(),
  window.___INITIAL_STATE__, //eslint-disable-line
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f //eslint-disable-line
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <div>
      <Route path="/:type" component={LocationInput}/>
      <Route path="/forecast" component={attachList(Forecast, pageTypes.forecast)} />
      <Route path="/current" component={attachList(Current, pageTypes.current)} />
      <Route path="/:type" component={PageSwitch} />
    </div>
  </BrowserRouter>
</Provider>, document.getElementById('index')); //eslint-disable-line