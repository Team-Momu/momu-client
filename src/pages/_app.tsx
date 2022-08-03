import React, { useEffect } from 'react';
import GlobalStyle from 'styles/GlobalStyles';

import AppLayout from '@common/AppLayOut';
import wrapper, { RootState, useAppSelector } from 'store/store';
import { AppProps } from 'next/app';
import 'styles/globals.css';
import 'styles/FilterStyle.css';
import axios from 'axios';
import Script from 'next/script';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
        <GlobalStyle />
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
