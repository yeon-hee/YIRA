import { IProjectProps } from '@src/types/project';

export const LOAD_PROJECT_FAILURE = 'LOAD_PROJECT_FAILURE' as const;
export const LOAD_PROJECT_SUCCESS = 'LOAD_PROJECT_SUCCESS' as const;
export const LOAD_PROJECT_REQUEST = 'LOAD_PROJECT_REQUEST' as const;

export interface LoadProjectRequest {
  type: typeof LOAD_PROJECT_REQUEST;
}

export interface LoadProjectSuccess {
  type: typeof LOAD_PROJECT_SUCCESS;
  data: IProjectProps[];
}

export interface LoadProjectFailure {
  type: typeof LOAD_PROJECT_FAILURE;
}

export const loadProjectRequest = (): LoadProjectRequest => ({
  type: LOAD_PROJECT_REQUEST,
});

export const loadProjectSuccess = (data: IProjectProps[]): LoadProjectSuccess => ({
  type: LOAD_PROJECT_SUCCESS,
  data,
});

export const loadProjectFailure = (): LoadProjectFailure => ({
  type: LOAD_PROJECT_FAILURE,
});

export type getProject =
  | ReturnType<typeof loadProjectRequest>
  | ReturnType<typeof loadProjectSuccess>
  | ReturnType<typeof loadProjectFailure>;
