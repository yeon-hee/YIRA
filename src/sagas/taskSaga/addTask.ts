import { takeLatest, put } from 'redux-saga/effects';
import { ADD_TASK_REQUEST, ADD_TASK_SUCCESS, ADD_TASK_FAILURE, addTaskRequest } from '@src/reducers/task/addTask';

function* addTask(action: ReturnType<typeof addTaskRequest>) {
  try {
    yield put({
      type: ADD_TASK_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: ADD_TASK_FAILURE,
      data: err as string,
    });
  }
}

function* watchAddTask() {
  yield takeLatest(ADD_TASK_REQUEST, addTask);
}

export default watchAddTask;
