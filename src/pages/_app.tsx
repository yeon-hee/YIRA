import App, { AppInitialProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';

import { globalStyles } from '@theme/globalStyle';
import theme from '@theme/.';
import wrapper from '@store/configureStore';
type AppProps = AppInitialProps;
import AppLayout from '@src/components/AppLayout/AppLayout';

class Page extends App<AppProps> {
  render() {
    const { Component } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>YIRA</title>
        </Head>
        <AppLayout>
          <Component />
        </AppLayout>
        {globalStyles}
      </ThemeProvider>
    );
  }
}

export default wrapper.withRedux(Page);
