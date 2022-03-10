import { ITaskProps } from '@src/types/task';

export const dummyTask: ITaskProps[] = [
  {
    id: 1,
    projectId: 1,
    summary: '화면 레이아웃 설정',
    description: '메뉴 레이아웃 배치',
    manager: '최연희',
  },
  {
    id: 2,
    projectId: 1,
    summary: '화면 설계서 작성',
    description: '일감 등록화면 화면설계서 작성',
    manager: '최연희',
  },
  {
    id: 3,
    projectId: 1,
    summary: '화면 개발',
    description: '일감 등록 화면 개발',
    manager: '최연희',
  },
];
