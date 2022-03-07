import { IProjectProps } from '@src/types/project';
import { ADD_PROJECT, DEL_PROJECT, GetProject } from './getProject';
import produce from 'immer';

interface IProjectState {
  project: IProjectProps[];
}

export const projectState: IProjectState = {
  project: [],
};

type ReducerAction = GetProject;

export const project = (state: IProjectState = projectState, action: ReducerAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_PROJECT:
        draft.project = draft.project.concat(action.data);
        console.log(draft.project);
        break;
      case DEL_PROJECT:
        console.log('del!');
        draft.project = draft.project.filter((p) => {
          p.id != action.data.id;
        });
        console.log(draft.project);
        break;
    }
  });
};

export default project;
