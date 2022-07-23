// user에 들어가야 하는 정보
// 사진, 아이디, 먹비티아이, 등급, 채택건수, 스크랩 게시물 아이디,,?

import { createSlice } from '@reduxjs/toolkit';
import { kakao, userInfo } from './userThunk';
import { IUser } from '../../../utils/interfaces/user/userInterface';
import axios from 'axios';

export const initialState: IUser = {
  error: '',
  status: '',
  me: '',
  kakaoId: '',
  nickname: 'string',
  profileImg: 'string',
  mbti: 0,
  level: 0,
  selectCount: 0,
  refreshToken: '',
  auth: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(kakao.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(kakao.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.auth = payload;
      const { access_token, refresh_token } = payload;
      localStorage.setItem('access_token', access_token);
    });
    builder.addCase(kakao.rejected, (state, action) => {
      state.status = 'failed';
    });
    builder.addCase(userInfo.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(userInfo.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled';
      state.me = payload;
    });
    builder.addCase(userInfo.rejected, (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    });
  },
});

export default userSlice.reducer;
