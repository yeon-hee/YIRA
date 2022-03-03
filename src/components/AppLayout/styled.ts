import styled from '@emotion/styled';
import { Layout, Button } from 'antd';
const { Content, Header, Footer } = Layout;

export const LayoutWrapper = styled(Layout)`
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
`;

export const HeaderWrapper = styled(Header)`
  background: white;
`;

export const AddButton = styled(Button)`
  background: #0052cc;
  color: white;
  border: none;
`;

export const ContentWrapper = styled(Content)`
  padding: 0 50px;
`;

export const FooterWrapper = styled(Footer)`
  text-align: center;
`;
