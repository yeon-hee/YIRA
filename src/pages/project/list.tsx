import { useRootState } from '@src/hooks/useRootState';
import { delProject } from '@src/reducers/project/getProject';
import { IProjectProps } from '@src/types/project';
import { Space, Table } from 'antd';
import { useRouter } from 'next/dist/client/router';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const ProjectDetail = () => {
  const { project } = useRootState((state) => state.project);

  const columns = [
    {
      title: '프로젝트명 ',
      dataIndex: 'pname',
      key: 'pname',
    },
    {
      title: '개요',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: '기간',
      dataIndex: ['startDate', 'endDate'],
      key: 'startDate',
    },
    {
      title: '리더',
      dataIndex: 'leader',
      key: 'leader',
    },
    {
      title: '상태',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: IProjectProps) => (
        <Space size="middle">
          <a
            onClick={() => {
              onDeleteProject(record);
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];
  const dataSource = project;

  const dispatch = useDispatch();

  const onDeleteProject = useCallback(
    (record: IProjectProps) => {
      console.log(record);
      dispatch(delProject(record));
    },
    [dispatch],
  );

  return (
    <>
      플젝 상세 페이지
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default ProjectDetail;
