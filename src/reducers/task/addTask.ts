import { ITaskProps } from '@src/types/task';

export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST' as const;
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS' as const;
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE' as const;

export interface AddTaskRequest {
  type: typeof ADD_TASK_REQUEST;
  data: ITaskProps;
}

export interface AddTaskSuccess {
  type: typeof ADD_TASK_SUCCESS;
  data: ITaskProps;
}

export interface AddTaskFailure {
  type: typeof ADD_TASK_FAILURE;
}

export const addTaskRequest = (data: ITaskProps): AddTaskRequest => ({
  type: ADD_TASK_REQUEST,
  data,
});

export const addTaskSuccess = (data: ITaskProps): AddTaskSuccess => ({
  type: ADD_TASK_SUCCESS,
  data,
});

export const addTaskFailure = (): AddTaskFailure => ({
  type: ADD_TASK_FAILURE,
});

export type addPost =
  | ReturnType<typeof addTaskRequest>
  | ReturnType<typeof addTaskSuccess>
  | ReturnType<typeof addTaskFailure>;
