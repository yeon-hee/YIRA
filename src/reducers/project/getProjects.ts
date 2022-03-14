import { IProjectProps } from '@src/types/project';

export const LOAD_PROJECTS_FAILURE = 'LOAD_PROJECTS_FAILURE' as const;
export const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS' as const;
export const LOAD_PROJECTS_REQUEST = 'LOAD_PROJECTS_REQUEST' as const;

export interface LoadProjectsRequest {
  type: typeof LOAD_PROJECTS_REQUEST;
}

export interface LoadProjectsSuccess {
  type: typeof LOAD_PROJECTS_SUCCESS;
  data: IProjectProps[];
}

export interface LoadProjectsFailure {
  type: typeof LOAD_PROJECTS_FAILURE;
}

export const loadProjectsRequest = (): LoadProjectsRequest => ({
  type: LOAD_PROJECTS_REQUEST,
});

export const loadProjectsSuccess = (data: IProjectProps[]): LoadProjectsSuccess => ({
  type: LOAD_PROJECTS_SUCCESS,
  data,
});

export const loadProjectsFailure = (): LoadProjectsFailure => ({
  type: LOAD_PROJECTS_FAILURE,
});

export type getProject =
  | ReturnType<typeof loadProjectsRequest>
  | ReturnType<typeof loadProjectsSuccess>
  | ReturnType<typeof loadProjectsFailure>;
