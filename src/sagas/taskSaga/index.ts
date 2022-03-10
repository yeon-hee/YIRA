import { all, fork } from 'redux-saga/effects';

import watchLoadTasks from './getTasks';
import watchAddTask from './addTask';

export default function* taskSaga() {
  yield all([fork(watchLoadTasks), fork(watchAddTask)]);
}
