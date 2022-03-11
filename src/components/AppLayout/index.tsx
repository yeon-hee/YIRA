import React, { useCallback, useState } from 'react';
import { Menu, Button } from 'antd';
import Link from 'next/link';
import { FileOutlined, DesktopOutlined, TeamOutlined, PlusOutlined } from '@ant-design/icons';
import { LayoutWrapper, ContentSection, FooterSection, HeaderSection } from './styled';
import TaskModal from '../TaskAdd/TaskModal';
import { useRootState } from '@src/hooks/useRootState';

const { SubMenu } = Menu;
interface LayoutProps {
  children: React.ReactNode;
}
const AppLayout = ({ children }: LayoutProps) => {
  const { project } = useRootState((state) => state.project);
  const [current, setCurrent] = useState<string>('SubMenu1');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onClickMenu = useCallback((e) => {
    setCurrent(e.key);
  }, []);

  const onClickModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  return (
    <LayoutWrapper className="layout">
      <HeaderSection>
        <p className="logo">
          <Link href="/taskMain">YIRA</Link>
        </p>
        <Menu mode="horizontal" onClick={onClickMenu} selectedKeys={[current]} defaultSelectedKeys={['1']}>
          <SubMenu key="SubMenu1" icon={<FileOutlined />} title="내 작업">
            <Menu.ItemGroup title="해야 할 일">
              <Menu.Item key="setting:1">일감 1</Menu.Item>
              <Menu.Item key="setting:2">일감 2</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key="SubMenu2" icon={<DesktopOutlined />} title="프로젝트">
            {project.length > 0 ? (
              <Menu.ItemGroup title="최근 항목">
                {project.map((p, dataIndex) => {
                  // console.log(dataIndex);
                  if (dataIndex < 3) {
                    return (
                      <Menu.Item key={`setting: ${p.id}`}>
                        <Link
                          href="#"
                          //  {`/project/${p.id}`}
                        >
                          {p.pname}
                        </Link>
                      </Menu.Item>
                    );
                  }
                })}
              </Menu.ItemGroup>
            ) : null}
            <Menu.ItemGroup title="프로젝트 관리">
              <Menu.Item key="setting:3">
                <Link href="/project/board">프로젝트 보드</Link>
              </Menu.Item>
              <Menu.Item key="setting:4">
                <Link href="/project/list">프로젝트 목록</Link>
              </Menu.Item>
              <Menu.Item key="setting:6">
                <Link href="/project/add">프로젝트 등록</Link>
              </Menu.Item>
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
    </LayoutWrapper>
  );
};

export default AppLayout;
