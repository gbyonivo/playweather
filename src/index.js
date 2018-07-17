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
      <Route path="/playweather/:type" component={LocationInput} />
      <Route path="/playweather/forecast" component={attachList(Forecast)} />
      <Route path="/playweather/current" component={attachList(Current)} />
      <Route path="/playweather/:type" component={PageSwitch} />
    </div>
  </BrowserRouter>
</Provider>, document.getElementById('index')); //eslint-disable-line