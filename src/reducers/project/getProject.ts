import { IProjectProps } from '@src/types/project';

export const ADD_PROJECT = 'ADD_PROJECT' as const;
export const DEL_PROJECT = 'DEL_PROJECT' as const;
export const UPDATE_STATUS_PROJECT = 'UPDATE_STATUS_PROJECT' as const;

export interface AddProject {
  type: typeof ADD_PROJECT;
  data: IProjectProps;
}
export interface DelProject {
  type: typeof DEL_PROJECT;
  data: IProjectProps;
}
export interface UpdateStatusProject {
  type: typeof UPDATE_STATUS_PROJECT;
  data: IProjectProps;
}

export const addProject = (data: IProjectProps): AddProject => ({
  type: ADD_PROJECT,
  data,
});

export const delProject = (data: IProjectProps): DelProject => ({
  type: DEL_PROJECT,
  data,
});
export const updateStatusProject = (data: IProjectProps): UpdateStatusProject => ({
  type: UPDATE_STATUS_PROJECT,
  data,
});

export type GetProject =
  | ReturnType<typeof addProject>
  | ReturnType<typeof delProject>
  | ReturnType<typeof updateStatusProject>;
