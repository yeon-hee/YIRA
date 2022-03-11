import { IProjectProps, PROJECT_STATUS } from '@src/types/project';

export const dummyProject: IProjectProps[] = [
  {
    id: 1235413,
    pname: 'string',
    desc: 'dfgh',
    startDate: '2022-03-10',
    endDate: '2022-05-14',
    leader: 'kdy',
    teammates: ['yujin', 'yuno'],
    status: PROJECT_STATUS.TODO,
    creator: 'kdy',
  },
  {
    id: 1235441,
    pname: 'asdf',
    desc: 'qwer',
    startDate: '2022-04-11',
    endDate: '2022-05-01',
    leader: 'byj',
    teammates: ['kdy', 'jyo'],
    status: PROJECT_STATUS.DONE,
    creator: 'jyo',
  },
  {
    id: 1254131,
    pname: 'fghj',
    desc: 'rtuiir',
    startDate: '2022-02-11',
    endDate: '2022-03-21',
    leader: 'jyo',
    teammates: ['kdy', 'byj'],
    status: PROJECT_STATUS.DONE,
    creator: 'byj',
  },
];
