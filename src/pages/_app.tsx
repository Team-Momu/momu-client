import type { AppProps } from 'next/app';
import AppLayout from '@common/AppLayOut';
import GlobalStyle from 'styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppLayout>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
export default MyApp;
