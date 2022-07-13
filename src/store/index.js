import { configureStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducer';
import saga from '../saga';
import _ from 'lodash';
import { saveState, loadState } from './localStorage';

export const history = createBrowserHistory();

history.listen((location, action) => {
  console.log("on route change");
  console.log(location);
  console.log(action);
})

const sagaMiddleware = createSagaMiddleware();   
const initialState = loadState();
const middleware = [
  sagaMiddleware
];


const store = configureStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

sagaMiddleware.run(saga);


store.subscribe(_.throttle(() => {
  saveState({
    login: store.getState().login
  });
}, 2000));

export default store;