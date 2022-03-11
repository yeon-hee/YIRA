import React from 'react';
import { Header, HeaderSection } from './styled';

const projectName = '최연희';

const BoardHeader = () => {
  return (
    <>
      <HeaderSection>프로젝트 &nbsp; / &nbsp; {projectName}</HeaderSection>
      <Header>{projectName} 보드</Header>
    </>
  );
};

export default BoardHeader;
