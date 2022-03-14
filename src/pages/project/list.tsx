import { CloseSquareOutlined } from '@ant-design/icons';
import { useRootState } from '@src/hooks/useRootState';
import { loadProjectsRequest } from '@src/reducers/project/getProjects';
import { updateProjectRequest } from '@src/reducers/project/updateProject';
import { IProjectProps, PROJECT_STATUS } from '@src/types/project';
import { Popconfirm, Space, Table } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

/*
추가할 내용
- 검색
- sorting
- 수정 페이지?
- collpase 하면 팀원 보이고, 팀원 추가, 삭제? <- 굳이 
- 삭제 confirm
- app layer 에서 최근 클릭한 애들 기억해서 걔네 보여주는..
- project reg 한 후 확인 페이지?
*/

const ProjectDetail = () => {
  const columns = [
    {
      title: '프로젝트명 ',
      dataIndex: 'pname',
      key: 'pname',
      sorter: (a: IProjectProps, b: IProjectProps) => a.pname.localeCompare(b.pname),
      width: '15%',
    },
    {
      title: '개요',
      dataIndex: 'desc',
      key: 'desc',
      sorter: (a: IProjectProps, b: IProjectProps) => a.desc.localeCompare(b.desc),
      width: '40%',
    },
    {
      title: '시작',
      dataIndex: 'startDate',
      key: 'startDate',
      sorter: (a: IProjectProps, b: IProjectProps) => a.startDate.localeCompare(b.startDate),
      width: '10%',
    },
    {
      title: '종료',
      dataIndex: 'endDate',
      key: 'endDate',
      sorter: (a: IProjectProps, b: IProjectProps) => a.endDate.localeCompare(b.endDate),
      width: '10%',
    },
    {
      title: '리더',
      dataIndex: 'leader',
      key: 'leader',
      sorter: (a: IProjectProps, b: IProjectProps) => a.leader.localeCompare(b.leader),
      width: '10%',
    },
    {
      title: '상태',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: 'TODO', value: PROJECT_STATUS.TODO },
        { text: 'DOING', value: PROJECT_STATUS.DOING },
        { text: 'DONE', value: PROJECT_STATUS.DONE },
      ],
      width: '10%',
      onFilter: (value: string, record: IProjectProps) => record.status.match(value),
      sorter: (a: IProjectProps, b: IProjectProps) => a.status.localeCompare(b.status),
      render: (text: unknown, record: IProjectProps) => (
        <Space size="middle" key={record.id}>
          <a
            onClick={() => {
              onChangeStatus(record);
            }}
          >
            {record.status}
          </a>
        </Space>
      ),
    },
    {
      title: '삭제',
      key: 'action',
      width: '5%',
      render: (text: unknown, record: IProjectProps) => (
        <Popconfirm
          key={record.id}
          title="Are you sure to delete this project?"
          onConfirm={() => {
            onDeleteProject(record);
          }}
          okText="Yes"
          cancelText="No"
        >
          <CloseSquareOutlined />
        </Popconfirm>
      ),
    },
  ];

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadProjectRequest());
  // }, [dispatch]);

  const { project } = useRootState((state) => state.project);

  const dataSource = project;

  const onDeleteProject = useCallback(
    (record: IProjectProps) => {
      console.log(record);
      dispatch(delProject(record));
    },
    [dispatch],
  );
  const onChangeStatus = useCallback(
    (record: IProjectProps) => {
      let status: PROJECT_STATUS = PROJECT_STATUS.TODO;
      switch (record.status) {
        case PROJECT_STATUS.TODO:
          status = PROJECT_STATUS.DOING;
          break;
        case PROJECT_STATUS.DOING:
          status = PROJECT_STATUS.DONE;
          break;
        case PROJECT_STATUS.DONE:
          status = PROJECT_STATUS.TODO;
          break;

        default:
          break;
      }
      dispatch(updateProjectRequest({ project: record, modified: '', status }));
    },
    [dispatch],
  );

  return (
    <>
      <div>플젝 상세 페이지</div>
      <Table dataSource={dataSource} rowKey={'id'} columns={columns} />
    </>
  );
};

export default ProjectDetail;
