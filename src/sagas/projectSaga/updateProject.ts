import { takeLatest, put } from 'redux-saga/effects';
import {
  updateProjectRequest,
  UPDATE_PROJECT_FAILURE,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
} from '@src/reducers/project/updateProject';

function* updateProject(action: ReturnType<typeof updateProjectRequest>) {
  try {
    yield put({
      type: UPDATE_PROJECT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: UPDATE_PROJECT_FAILURE,
      data: err as string,
    });
  }
}

function* watchUpdateProject() {
  yield takeLatest(UPDATE_PROJECT_REQUEST, updateProject);
}

export default watchUpdateProject;
