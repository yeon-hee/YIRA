import { all, fork } from 'redux-saga/effects';

import watchLoadUsers from './getUsers';

export default function* userSaga() {
  yield all([fork(watchLoadUsers)]);
}
