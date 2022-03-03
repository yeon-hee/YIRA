import { put, takeLatest } from 'redux-saga/effects';
import { addProject, ADD_PROJECT } from '@src/reducers/project/getProject';

function* project(action: ReturnType<typeof addProject>) {
  try {
    yield put({
      type: ADD_PROJECT,
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
  yield takeLatest(ADD_PROJECT, project);
}

export default watchLoadUsers;
