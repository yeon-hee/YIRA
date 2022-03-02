import styled from '@emotion/styled';
import { Layout } from 'antd';
const { Content, Footer } = Layout;

export const LayoutWrapper = styled(Layout)`
  min-height: 100vh;
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
    padding: 0;
  }
`;

export const ContentWrapper = styled(Content)`
  margin: 0 16px;

  .site-layout-main {
    padding: 24px;
  }
`;

export const FooterWrapper = styled(Footer)`
  text-align: center;
`;

export const MenuTitle = styled.div`
  display: flex;
  margin: 15px 0 10px 15px;
  width: 110px;
`;
