import { all, fork } from 'redux-saga/effects';
import userSaga from './userSaga';
import taskSaga from './taskSaga';
import projectSaga from './projectSaga';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(taskSaga), fork(projectSaga)]);
}
