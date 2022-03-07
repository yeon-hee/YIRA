export interface IProjectProps {
  id: number;
  pname: string;
  desc: string;
  startDate: string;
  endDate: string;
  leader: string;
  teammates: string[];
  status: PROJECT_STATUS;
}
export const PROJECT_STATUS = {
  TODO: 'TODO',
  DOING: 'DOING',
  DONE: 'DONE',
} as const;

export type PROJECT_STATUS = typeof PROJECT_STATUS[keyof typeof PROJECT_STATUS];
