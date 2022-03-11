import React, { useCallback, useState } from 'react';
import { Menu, Button, Layout } from 'antd';
import Link from 'next/link';
import { FileOutlined, DesktopOutlined, TeamOutlined, PlusOutlined } from '@ant-design/icons';
import { LayoutSection, ContentSection, FooterSection, HeaderSection } from './styled';
import TaskModal from '../TaskAdd/TaskModal';

const { SubMenu } = Menu;
interface LayoutProps {
  children: React.ReactNode;
}
const AppLayout = ({ children }: LayoutProps) => {
  const [current, setCurrent] = useState<string>('SubMenu1');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onClickMenu = useCallback((e) => {
    setCurrent(e.key);
  }, []);

  const onClickModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  return (
    <LayoutSection className="layout">
      <HeaderSection>
        <p className="logo">
          <Link href="/taskMain">YIRA</Link>
        </p>
        <Menu mode="horizontal" onClick={onClickMenu} selectedKeys={[current]} defaultSelectedKeys={['1']}>
          <SubMenu key="SubMenu1" icon={<FileOutlined />} title="내 작업">
            <Menu.ItemGroup title="해야 할 일">
              <Menu.Item key="setting:1">
                <Link href="/taskBoard">일감 1</Link>
              </Menu.Item>
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
            <Button type="primary" onClick={onClickModal}>
              만들기
            </Button>
            <TaskModal visible={isModalVisible} setIsModalVisible={setIsModalVisible} />
          </Menu.Item>
        </Menu>
      </HeaderSection>
      <ContentSection>
        <div className="site-layout-content">{children}</div>
      </ContentSection>
      <FooterSection>Ant Design ©2018 Created by Ant UED</FooterSection>
    </LayoutSection>
  );
};

export default AppLayout;
