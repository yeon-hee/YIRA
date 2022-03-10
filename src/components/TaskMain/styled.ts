import styled from '@emotion/styled';
import { Card } from 'antd';

export const Header = styled.p`
  margin: 15px 0;
  font-size: 1.6em;
`;

export const ProjectHeader = styled.p`
  margin: 65px 0 10px 0;
  font-size: 18px;
  color: #636e72;
`;

export const ProjectSection = styled.section`
  display: inline-flex;

  .ant-card {
    margin-right: 12px;
  }
`;

export const CardSection = styled(Card)`
  width: 300px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: var(--ds-card, 0 1px 1px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31));

  .ant-card-meta-detail > .ant-card-meta-title {
    margin-bottom: 0px;
  }

  &: hover {
    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.1), 0 3px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const TaskListSection = styled.section`
  margin-top: 50px;

  .ant-list-item-meta-title {
    margin-bottom: 0px;
  }

  .ant-list-item-meta-avatar {
    margin: auto;
    margin-right: 16px;
  }

  .ant-list-item {
    cursor: pointer;
    padding: 12px;

    &: hover {
      background: rgb(245, 246, 248);
    }
  }
`;
