import type { AppProps } from 'next/app';
import AppLayout from '@common/AppLayOut';
import GlobalStyle from 'styles/GlobalStyles';
import { Provider } from 'react-redux';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import slices from '../rtk/slices';

function MyApp({ Component, pageProps, store }: any) {
  return (
    <Provider store={store}>
      <AppLayout>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}

const configureStore = (initialState, options) => {
  const middlewares = []; // 미들웨어들을 넣으면 된다.
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(slices, initialState, enhancer);
  return store;
};

export default withRedux(configureStore)(MyApp);
