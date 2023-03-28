/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextComponentType } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '@fontsource/roboto';

import '@/styles/globals.css';
import 'antd/dist/antd.css';

interface CustomAppProps extends AppProps {
  Component: NextComponentType & {
    Layout?: any;
  };
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <>
      <Head>
        <title> ❤Bé Bự❤</title>
        <meta name='description' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
