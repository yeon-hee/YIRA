import { IProjectProps } from '@src/types/project';
import { ADD_PROJECT, GetProject } from './getProject';
import produce from 'immer';

interface IProjectState {
  project: IProjectProps | null;
}

export const projectState: IProjectState = {
  project: null,
};

type ReducerAction = GetProject;

export const project = (state: IProjectState = projectState, action: ReducerAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_PROJECT:
        draft.project = action.data;
        console.log(action.data);
        break;
    }
  });
};

export default project;
