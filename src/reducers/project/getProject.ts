import { IProjectProps } from '@src/types/project';

export const ADD_PROJECT = 'ADD_PROJECT' as const;

export interface AddProject {
  type: typeof ADD_PROJECT;
  data: IProjectProps;
}

export const addProject = (data: IProjectProps): AddProject => ({
  type: ADD_PROJECT,
  data,
});

export type GetProject = ReturnType<typeof addProject>;
