import { call, put, takeLatest } from "redux-saga/effects";
import { SIGN_UP } from "../action/action-types";
import { loading, showError } from "../action/ui";
import { signupApi } from "../api/signup";
import { setPath } from "../reducer/ui";


function* signupSaga({payload}) {

    try {
      yield put(loading(true))
      const response = yield call(signupApi, payload);
      console.log(response)
      yield put(setPath('/home'))
    } catch(error) {
      yield put(showError(error));
    }
    yield put(loading(false))
  }
  
  export function* watchSignupSaga() {
    yield takeLatest(SIGN_UP, signupSaga);
  }