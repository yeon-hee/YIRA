import { IProjectProps } from '@src/types/project';

export const ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE' as const;
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS' as const;
export const ADD_PROJECT_REQUEST = 'ADD_PROJECT_REQUEST' as const;

export interface AddProjectRequest {
  type: typeof ADD_PROJECT_REQUEST;
  data: IProjectProps;
}

export interface AddProjectSuccess {
  type: typeof ADD_PROJECT_SUCCESS;
  data: IProjectProps;
}

export interface AddProjectFailure {
  type: typeof ADD_PROJECT_FAILURE;
}

export const addProjectRequest = (data: IProjectProps): AddProjectRequest => ({
  type: ADD_PROJECT_REQUEST,
  data,
});

export const addProjectSuccess = (data: IProjectProps): AddProjectSuccess => ({
  type: ADD_PROJECT_SUCCESS,
  data,
});

export const addProjectFailure = (): AddProjectFailure => ({
  type: ADD_PROJECT_FAILURE,
});

export type addProject =
  | ReturnType<typeof addProjectRequest>
  | ReturnType<typeof addProjectSuccess>
  | ReturnType<typeof addProjectFailure>;
