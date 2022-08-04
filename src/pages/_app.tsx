import React, { useEffect } from 'react';
import GlobalStyle from 'styles/GlobalStyles';

import AppLayout from '@common/AppLayOut';
import wrapper, { RootState, useAppSelector } from 'store/store';
import { AppProps } from 'next/app';
import 'styles/globals.css';
import 'styles/FilterStyle.css';
import axios from 'axios';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          property="og:url"
          content={
            'https://momueat.com/' || 'https://momueat.com' || 'momueat.com'
          }
          key="url"
        />
        <meta property="og:title" content="타이틀" key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:image" content="/" key="image" />
        <meta property="og:description" content="설명글" key="description" />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script id="ga_init" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <AppLayout>
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <GlobalStyle />
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
