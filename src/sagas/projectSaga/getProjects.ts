import { put, takeLatest } from 'redux-saga/effects';
import { LOAD_PROJECTS_SUCCESS, LOAD_PROJECTS_FAILURE, LOAD_PROJECTS_REQUEST } from '@src/reducers/project/getProjects';

import { dummyProject } from '@src/dummyData/project';
import { useRootState } from '@src/hooks/useRootState';
import { IProjectProps } from '@src/types/project';

function LoadProjectsAPI(): IProjectProps[] {
  console.log('load project api');
  const { project } = useRootState((state) => state.project);
  return project;

  //  dummyProject;
}

function* getProject() {
  try {
    const res = LoadProjectsAPI();
    yield put({
      type: LOAD_PROJECTS_SUCCESS,
      data: res,
    });
  } catch (err) {
    yield put({
      type: LOAD_PROJECTS_FAILURE,
      data: err as string,
    });
  }
}

function* watchGetProjects() {
  yield takeLatest(LOAD_PROJECTS_REQUEST, getProject);
}
export default watchGetProjects;
