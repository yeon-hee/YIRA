import { takeLatest, put } from 'redux-saga/effects';
import {
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  addProjectRequest,
} from '@src/reducers/project/addProject';

function* addProject(action: ReturnType<typeof addProjectRequest>) {
  try {
    yield put({
      type: ADD_PROJECT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: ADD_PROJECT_FAILURE,
      data: err as string,
    });
  }
}

function* watchAddProject() {
  yield takeLatest(ADD_PROJECT_REQUEST, addProject);
}

export default watchAddProject;
