import React from 'react';
import Link from 'next/link';
import { Card, Avatar, Col, Row } from 'antd';
import { Header, ProjectHeader, ProjectSection, CardSection } from './styled';

const { Meta } = Card;

const TaskHeader = () => {
  return (
    <>
      <Header>내 작업</Header>
      <ProjectHeader>프로젝트</ProjectHeader>
      <ProjectSection>
        <Link href="/">
          <CardSection>
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="YIRA"
              description="일감 관리 솔루션"
            />
          </CardSection>
        </Link>
        <Link href="/">
          <CardSection>
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="HEY_NANA"
              description="반려동물 산책 앱"
            />
          </CardSection>
        </Link>
        <Link href="/">
          <CardSection>
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="BUTTER_YUM"
              description="버터얌 프로젝트"
            />
          </CardSection>
        </Link>
      </ProjectSection>
    </>
  );
};

export default TaskHeader;
