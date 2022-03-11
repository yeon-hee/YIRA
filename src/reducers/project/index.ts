import { IProjectProps } from '@src/types/project';
import { getProject, LOAD_PROJECT_FAILURE, LOAD_PROJECT_REQUEST, LOAD_PROJECT_SUCCESS } from './getProject';
import produce from 'immer';
import { addProject, ADD_PROJECT_FAILURE, ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS } from './addProject';
import { updateProject, UPDATE_PROJECT_FAILURE, UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS } from './updateProject';
import { dummyProject } from '@src/dummyData/project';

interface IProjectState {
  project: IProjectProps[];
  isLoading: boolean;
}

export const projectState: IProjectState = {
  project: [],
  isLoading: false,
};

type ReducerAction = getProject | addProject | updateProject;

export const project = (state: IProjectState = projectState, action: ReducerAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_PROJECT_REQUEST:
        console.log('load project request');
        draft.isLoading = true;
        break;
      case LOAD_PROJECT_SUCCESS:
        draft.project = action.data;
        draft.isLoading = false;
        console.log('load project success');
        console.log(action.data);
        break;
      case LOAD_PROJECT_FAILURE:
        draft.isLoading = false;
        console.log('load project failure');
        break;
      case ADD_PROJECT_REQUEST:
        draft.isLoading = true;
        console.log('add request');
        break;
      case ADD_PROJECT_SUCCESS:
        draft.project = draft.project.concat(action.data);
        draft.isLoading = false;
        console.log('add success');
        break;
      case ADD_PROJECT_FAILURE:
        draft.isLoading = false;
        console.log('add failed');
        break;
      case UPDATE_PROJECT_REQUEST:
        draft.isLoading = true;
        console.log('update request');
        break;
      case UPDATE_PROJECT_SUCCESS:
        // dummyProject.map((item) => {
        //   return item.id === action.data.project.id ? { ...item, status: action.data.status } : item;
        // });
        // draft.project = draft.project.map((item) => {
        //   return item.id === action.data.project.id ? { ...item, status: action.data.status } : item;
        // });
        draft.project = draft.project.filter((item) => item.id != action.data.project.id);
        draft.project = draft.project.concat({ ...action.data.project, status: action.data.status }); // ㅇㅣ래버리면.......... 수정할 때마다 순서 바껴서 list에서 좀 이상함
        console.log('update success');
        break;
      case UPDATE_PROJECT_FAILURE:
        draft.isLoading = false;
        console.log('update fail');
        break;

      // case DEL_PROJECT:
      //   console.log('del project');
      //   draft.project = draft.project.filter((item) => action.data.id != item.id);
      //   break;
      //
      default:
        break;
    }
  });
};

export default project;
