import { all, fork } from 'redux-saga/effects';

import watchLoadUsers from './getProject';

export default function* userSaga() {
  yield all([fork(watchLoadUsers)]);
}
