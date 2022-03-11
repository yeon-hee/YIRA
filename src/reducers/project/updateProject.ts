import { IProjectProps, PROJECT_STATUS } from '@src/types/project';

export const UPDATE_PROJECT_FAILURE = 'UPDATE_PROJECT_FAILURE' as const;
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS' as const;
export const UPDATE_PROJECT_REQUEST = 'UPDATE_PROJECT_REQUEST' as const;

export interface UpdateProjectRequest {
  type: typeof UPDATE_PROJECT_REQUEST;
  data: { project: IProjectProps; status: PROJECT_STATUS; modified: string };
}

export interface UpdateProjectSuccess {
  type: typeof UPDATE_PROJECT_SUCCESS;
  data: { project: IProjectProps; status: PROJECT_STATUS; modified: string };
}

export interface UpdateProjectFailure {
  type: typeof UPDATE_PROJECT_FAILURE;
}

export const updateProjectRequest = (data: {
  project: IProjectProps;
  status: PROJECT_STATUS;
  modified: string;
}): UpdateProjectRequest => ({
  type: UPDATE_PROJECT_REQUEST,
  data,
});

export const updateProjectSuccess = (data: {
  project: IProjectProps;
  status: PROJECT_STATUS;
  modified: string;
}): UpdateProjectSuccess => ({
  type: UPDATE_PROJECT_SUCCESS,
  data,
});

export const updateProjectFailure = (): UpdateProjectFailure => ({
  type: UPDATE_PROJECT_FAILURE,
});

export type updateProject =
  | ReturnType<typeof updateProjectRequest>
  | ReturnType<typeof updateProjectSuccess>
  | ReturnType<typeof updateProjectFailure>;
