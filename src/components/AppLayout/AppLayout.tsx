import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { FileOutlined, DesktopOutlined, TeamOutlined, PlusOutlined } from '@ant-design/icons';
import { LayoutWrapper, ContentWrapper, FooterWrapper, AddButton, HeaderWrapper } from './styled';

const { SubMenu } = Menu;
interface LayoutProps {
  children: React.ReactNode;
}
const AppLayout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper className="layout">
      <HeaderWrapper>
        <p className="logo">YIRA</p>
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
          <SubMenu key="SubMenu1" icon={<FileOutlined />} title="내 작업">
            <Menu.ItemGroup title="해야 할 일">
              <Menu.Item key="setting:1">일감 1</Menu.Item>
              <Menu.Item key="setting:2">일감 2</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key="SubMenu2" icon={<DesktopOutlined />} title="프로젝트">
            <Menu.ItemGroup title="최근 항목">
              <Menu.Item key="setting:3">프로젝트 1</Menu.Item>
              <Menu.Item key="setting:4">프로젝트 2</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key="SubMenu3" icon={<TeamOutlined />} title="사용자">
            <Menu.ItemGroup title="내 공동 작업자">
              <Menu.Item key="setting:5" icon={<PlusOutlined />}>
                팀원 초대
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="4">
            <AddButton>만들기</AddButton>
          </Menu.Item>
        </Menu>
      </HeaderWrapper>
      <ContentWrapper>
        <div className="site-layout-content">{children}</div>
      </ContentWrapper>
      <FooterWrapper>Ant Design ©2018 Created by Ant UED</FooterWrapper>
    </LayoutWrapper>
  );
};

export default AppLayout;
