export interface ITaskProps {
  id: number;
  dragId: string;
  projectId: number;
  summary: string;
  description: string | null;
  manager: string | null;
}
