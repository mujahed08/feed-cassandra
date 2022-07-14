import { put, takeLatest, call } from 'redux-saga/effects';
import { logIn } from '../action/login';
import { LOGIN_USER } from '../action/action-types';
import { showError, loading, histPush } from '../action/ui';
import { signupApi } from '../api/signup';

function* loginUserSaga({payload}) {

  try {
    yield put(loading(true))
    const response = yield call(signupApi, payload);
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