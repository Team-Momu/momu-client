import React from 'react';
import GlobalStyle from 'styles/GlobalStyles';
import withRedux from 'next-redux-wrapper';
import AppLayout from '@common/AppLayOut';
import wrapper from 'store/store';

function MyApp({ Component, pageProps, store }: any) {
  return (
    <AppLayout>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppLayout>
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
