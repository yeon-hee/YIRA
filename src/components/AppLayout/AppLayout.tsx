import React, { useCallback, useState } from 'react';
import { useRootState } from '@src/hooks/useRootState';
import { Layout, Menu, Image } from 'antd';
import Link from 'next/link';
import { PieChartOutlined, FileOutlined } from '@ant-design/icons';
import { LayoutWrapper, ContentWrapper, FooterWrapper, MenuTitle } from './styled';

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

interface LayoutProps {
  children: React.ReactNode;
}
const AppLayout = ({ children }: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <LayoutWrapper>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <MenuTitle>
          <Image src="icons/logo.png"></Image>
        </MenuTitle>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu key="sub1" icon={<FileOutlined />} title="일감 관리">
            <Menu.Item key="1">
              <Link href="/todos">일감 등록</Link>
            </Menu.Item>
            <Menu.Item key="2">일감 상세</Menu.Item>
            <Menu.Item key="3">일감 보드</Menu.Item>
            <Menu.Item key="4">일감 캘린더</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<PieChartOutlined />} title="프로젝트 관리">
            <Menu.Item key="5">프로젝트 등록</Menu.Item>
            <Menu.Item key="6">프로젝트 상세</Menu.Item>
            <Menu.Item key="7">프로젝트 보드</Menu.Item>
            <Menu.Item key="8">프로젝트 캘린더</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" />
        <ContentWrapper>
          <div className="site-layout-main">{children}</div>
        </ContentWrapper>
        <FooterWrapper>Ant Design ©2018 Created by Ant UED</FooterWrapper>
      </Layout>
    </LayoutWrapper>
  );
};

export default AppLayout;
