import { IProjectProps, PROJECT_STATUS } from '@src/types/project';
import { ADD_PROJECT, DEL_PROJECT, GetProject, UPDATE_STATUS_PROJECT } from './getProject';
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
        console.log('add project');
        draft.project = draft.project.concat(action.data);
        break;
      case DEL_PROJECT:
        console.log('del project');
        draft.project = draft.project.filter((item) => action.data.id != item.id);
        break;
      case UPDATE_STATUS_PROJECT: {
        console.log('update project');
        draft.project = draft.project.map((item) => {
          let changedStatus: PROJECT_STATUS;
          if (item.status == PROJECT_STATUS.TODO) changedStatus = PROJECT_STATUS.DOING;
          else if (item.status == PROJECT_STATUS.DOING) changedStatus = PROJECT_STATUS.DONE;
          else changedStatus = PROJECT_STATUS.TODO;
          return item.id === action.data.id ? { ...item, status: changedStatus } : item;
        });
        break;
      }
    }
  });
};

export default project;
