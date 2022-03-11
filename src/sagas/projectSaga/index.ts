import { all, fork } from 'redux-saga/effects';
import watchAddProject from './addProject';
import watchGetProject from './getProject';
import watchUpdateProject from './updateProject';

export default function* userSaga() {
  yield all([fork(watchAddProject), fork(watchGetProject), fork(watchUpdateProject)]);
}
