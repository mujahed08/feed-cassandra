import { all, fork, takeEvery } from 'redux-saga/effects';
import { watchLoginUserSaga } from './login';
import { watchShowErrorSaga, watchHistPushSaga } from './ui';


export function* logAction(action) {
  console.log(action)
  yield;
}

export default function* root() {
  yield all([
    fork(watchLoginUserSaga),
    fork(watchShowErrorSaga),
    fork(watchHistPushSaga),
    takeEvery('*', logAction)
  ]);
}