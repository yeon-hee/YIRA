import { all, fork } from 'redux-saga/effects';
import watchAddProject from './addProject';
import watchGetProjects from './getProjects';
import watchUpdateProject from './updateProject';

export default function* userSaga() {
  yield all([fork(watchAddProject), fork(watchGetProjects), fork(watchUpdateProject)]);
}
