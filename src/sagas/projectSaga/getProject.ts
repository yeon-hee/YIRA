import { put, takeLatest } from 'redux-saga/effects';
import { LOAD_PROJECT_SUCCESS, LOAD_PROJECT_FAILURE, LOAD_PROJECT_REQUEST } from '@src/reducers/project/getProject';

import { dummyProject } from '@src/dummyData/project';
import { useRootState } from '@src/hooks/useRootState';
import { IProjectProps } from '@src/types/project';

function LoadProjectAPI(): IProjectProps[] {
  console.log('load project api');
  const { project } = useRootState((state) => state.project);
  return project;

  //  dummyProject;
}

function* getProject() {
  try {
    const res = LoadProjectAPI();
    yield put({
      type: LOAD_PROJECT_SUCCESS,
      data: res,
    });
  } catch (err) {
    yield put({
      type: LOAD_PROJECT_FAILURE,
      data: err as string,
    });
  }
}

function* watchGetProject() {
  yield takeLatest(LOAD_PROJECT_REQUEST, getProject);
}
export default watchGetProject;
