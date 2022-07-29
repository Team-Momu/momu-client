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
import getPlaceReducer from '@slices/comment/getPlaceSlice';
import profileSetReducer from '@slices//profileSet/profileSetSlice';
import placeChoiceReducer from '@slices/comment/PlaceChoiceSlice';
import addCurationSliceReducer from '@slices/curation/addCurationSlice';
import commentPostReducer from '@slices/comment/commentPostSlice';
import selectReducer from '@slices/select/selectSlice';
import mypageReducer from '@slices/mypage/mypageSlice';

const preloadedState = {};

export const store = configureStore({
  reducer: {
    curation: curationReducer,
    postComments: commentPostReducer,
    comments: getPlaceReducer,
    placechoice: placeChoiceReducer,
    detailCuration: detailCurationReducer,
    addCuration: addCurationSliceReducer,
    user: userReducer,
    mbti: mbtiReducer,
    scrap: scrapReducer,
    select: selectReducer,
    profileSet: profileSetReducer,
    mypage: mypageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
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
