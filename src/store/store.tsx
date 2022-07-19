import {
  configureStore,
  EnhancedStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import curationReducer from '@slices/curation/curationPostSlice';
import mbtiReducer from '@slices/mbti/mbtiSlice';
import userReducer from '@slices/user/userSlice';
import scrapReducer from '@slices/scrap/scrapSlice';
import detailCurationReducer from '@slices/curation/detailCurationPostSlice';
const preloadedState = {};

export const store = configureStore({
  reducer: {
    curation: curationReducer,
    detailCuration: detailCurationReducer,
    user: userReducer,
    mbti: mbtiReducer,
    scrap: scrapReducer,
  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

//useSelector, useDispatch 에 대한 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// To use async function, use below code
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

const createStore = () => store;

const wrapper = createWrapper(createStore);

export default wrapper;
