import React, { useEffect } from 'react';
import GlobalStyle from 'styles/GlobalStyles';
import withRedux from 'next-redux-wrapper';
import AppLayout from '@common/AppLayOut';
import wrapper from 'store/store';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/FilterStyle.css';
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

// const configureStore = (initialState, options) => {
//   const middlewares = []; // 미들웨어들을 넣으면 된다.
//   const enhancer =
//     process.env.NODE_ENV === 'production'
//       ? compose(applyMiddleware(...middlewares))
//       : composeWithDevTools(applyMiddleware(...middlewares));
//   const store = createStore(slices, initialState, enhancer);
//   return store;
// };

export default wrapper.withRedux(MyApp);
