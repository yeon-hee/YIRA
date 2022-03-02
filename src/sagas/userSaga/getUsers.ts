import { put, takeLatest } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, logInRequest } from '@src/reducers/user/getUser';

function* logIn(action: ReturnType<typeof logInRequest>) {
  try {
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      data: err as string,
    });
  }
}

function* watchLoadUsers() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

export default watchLoadUsers;
