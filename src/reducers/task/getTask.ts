import { ITaskProps } from '@src/types/task';

export const LOAD_TASK_REQUEST = 'LOAD_TASK_REQUEST' as const;
export const LOAD_TASK_SUCCESS = 'LOAD_TASK_SUCCESS' as const;
export const LOAD_TASK_FAILURE = 'LOAD_TASK_FAILURE' as const;

export interface LoadTaskRequest {
  type: typeof LOAD_TASK_REQUEST;
}

export interface LoadTaskSuccess {
  type: typeof LOAD_TASK_SUCCESS;
  data: ITaskProps[];
}

export interface LoadTaskFailure {
  type: typeof LOAD_TASK_FAILURE;
}

export const loadTaskRequest = (): LoadTaskRequest => ({
  type: LOAD_TASK_REQUEST,
});

export const loadTaskSuccess = (data: ITaskProps[]): LoadTaskSuccess => ({
  type: LOAD_TASK_SUCCESS,
  data,
});

export const loadTaskFailure = (): LoadTaskFailure => ({
  type: LOAD_TASK_FAILURE,
});

export type GetTask =
  | ReturnType<typeof loadTaskRequest>
  | ReturnType<typeof loadTaskSuccess>
  | ReturnType<typeof loadTaskFailure>;
