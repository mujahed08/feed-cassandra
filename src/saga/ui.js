import { takeLatest, call, put } from 'redux-saga/effects';
import { alert } from "../common/modal";
import { SHOW_ERROR, HIST_PUSH } from "../action/action-types";
import { setPath } from '../reducer/ui';


function* showErrorSaga({error}) {
    if( error.response && error.response.status >= 500 ) {
        const e = yield error.response.text()
        console.log(e)
        yield call(alert, JSON.stringify(e))
    } else if (error.response && error.response.statusText){
        yield call(alert, error.response.statusText)
    } else {
        yield call(alert, error.message)
    }
}

export function* watchShowErrorSaga() {
    yield takeLatest(SHOW_ERROR, showErrorSaga);
}


function* histPushSaga({path}) {
    yield put(setPath, path)
}

export function* watchHistPushSaga() {
    yield takeLatest(HIST_PUSH, histPushSaga);
}