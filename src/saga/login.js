import { put, takeLatest, call } from 'redux-saga/effects';
import { logIn } from '../action/login';
import { LOGIN_USER } from '../action/action-types';
import { loginUserApi } from '../api/login'
import { showError, loading, histPush } from '../action/ui';

function* loginUserSaga({payload}) {

  try {
    yield put(loading(true))
    const response = yield call(loginUserApi, payload);
    yield put(logIn(response));
    yield put(histPush('/home'))
  } catch(error) {
    yield put(showError(error));
  }
  yield put(loading(false))
}

export function* watchLoginUserSaga() {
  yield takeLatest(LOGIN_USER, loginUserSaga);
}