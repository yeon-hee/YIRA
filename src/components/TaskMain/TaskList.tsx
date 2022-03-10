import React, { useEffect } from 'react';
import { Tabs, List, Avatar, Popover } from 'antd';
import { TaskListSection } from './styled';
import { CheckSquareTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { loadTaskRequest } from '@src/reducers/task/getTask';
import { useRootState } from '@src/hooks/useRootState';

const { TabPane } = Tabs;

const TaskList = () => {
  const dispatch = useDispatch();
  const { task } = useRootState((state) => state.task);

  useEffect(() => {
    dispatch(loadTaskRequest());
  }, []);

  return (
    <TaskListSection>
      <Tabs defaultActiveKey="1">
        <TabPane tab="작업 항목" key="1">
          <List
            itemLayout="horizontal"
            dataSource={task}
            renderItem={(item) => (
              <List.Item onClick={() => console.log(item)}>
                <List.Item.Meta
                  avatar={<CheckSquareTwoTone style={{ fontSize: '25px' }} />}
                  title={item.summary}
                  description={
                    <span>
                      #{item.id} opened by {item.manager}
                    </span>
                  }
                />
                <Popover placement="bottom" content={item.manager}>
                  {
                    <Avatar src="https://secure.gravatar.com/avatar/8fd636768841b632277fc4afe3cbfd1a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Fdefault-avatar-6.png" />
                  }
                </Popover>
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="나에게 할당됨" key="2">
          나에게 할당된 일감 리스트
        </TabPane>
      </Tabs>
    </TaskListSection>
  );
};

export default TaskList;
