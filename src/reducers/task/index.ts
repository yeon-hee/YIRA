import { ITaskProps } from '@src/types/task';
import produce from 'immer';
import { LOAD_TASK_REQUEST, LOAD_TASK_SUCCESS, LOAD_TASK_FAILURE, GetTask } from './getTask';
import { ADD_TASK_REQUEST, ADD_TASK_SUCCESS, ADD_TASK_FAILURE, addPost } from './addTask';

interface ITaskState {
  task: ITaskProps[];
  isLoading: boolean;
}

export const taskState: ITaskState = {
  task: [],
  isLoading: false,
};

type ReducerAction = GetTask | addPost;

export const task = (state: ITaskState = taskState, action: ReducerAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_TASK_REQUEST:
        draft.isLoading = true;
        break;
      case LOAD_TASK_SUCCESS:
        draft.task = action.data;
        draft.isLoading = false;
        break;
      case LOAD_TASK_FAILURE:
        draft.isLoading = false;
        break;
      case ADD_TASK_REQUEST:
        draft.isLoading = true;
        break;
      case ADD_TASK_SUCCESS:
        draft.task = draft.task.concat(action.data);
        draft.isLoading = false;
        break;
      case ADD_TASK_FAILURE:
        draft.isLoading = false;
        break;
    }
  });
};

export default task;
