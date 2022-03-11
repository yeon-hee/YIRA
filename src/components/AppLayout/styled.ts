import styled from '@emotion/styled';
import { Layout } from 'antd';
const { Content, Header, Footer } = Layout;

export const LayoutSection = styled(Layout)`
  height: 100%;
  .logo {
    float: left;
    color: #0052cc;
    font-size: 25px;
    font-weight: bold;
    margin-right: 40px;
  }

  .ant-row-rtl .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }
  .site-layout-content {
    height: 100%;
    padding: 24px;
  }

  .ant-layout-content {
    background: white;
  }

  .ant-tabs-tab {
    font-size: 16px;
  }

  .ant-menu {
    background: none;
  }
`;

export const HeaderSection = styled(Header)`
  background: white;

  border-bottom: 2px solid #f0f0f0;
`;

export const ContentSection = styled(Content)`
  padding: 0 50px;
`;

export const FooterSection = styled(Footer)`
  text-align: center;
`;
