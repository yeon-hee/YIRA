import { put, takeLatest } from 'redux-saga/effects';
import {
  addProject,
  ADD_PROJECT,
  delProject,
  DEL_PROJECT,
  UPDATE_STATUS_PROJECT,
} from '@src/reducers/project/getProject';

function* project(action: ReturnType<typeof delProject> | ReturnType<typeof addProject>) {
  try {
    yield put({
      type: DEL_PROJECT,
      data: action.data,
    });
    yield put({
      type: ADD_PROJECT,
      data: action.data,
    });
    yield put({
      type: UPDATE_STATUS_PROJECT,
      data: action.data,
    });
  } catch (err) {
    console.log(err);
    // yield put({
    //   type: LOG_IN_FAILURE,
    //   data: err as string,
    // });
  }
}

function* watchLoadUsers() {
  yield takeLatest([ADD_PROJECT, DEL_PROJECT, UPDATE_STATUS_PROJECT], project);
}

export default watchLoadUsers;
