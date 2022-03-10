export interface ITaskProps {
  id: number;
  projectId: number;
  summary: string;
  description: string | null;
  manager: string | null;
}
