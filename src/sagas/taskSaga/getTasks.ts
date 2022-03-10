import { takeLatest, put, call } from 'redux-saga/effects';
import { dummyTask } from '@src/dummyData/task';
import { LOAD_TASK_REQUEST, LOAD_TASK_SUCCESS, LOAD_TASK_FAILURE } from '@src/reducers/task/getTask';

function loadTaskAPI() {
  return dummyTask;
}

function* getTask() {
  try {
    const result = loadTaskAPI();
    yield put({
      type: LOAD_TASK_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: LOAD_TASK_FAILURE,
      data: err as string,
    });
  }
}

function* watchLoadTasks() {
  yield takeLatest(LOAD_TASK_REQUEST, getTask);
}

export default watchLoadTasks;
