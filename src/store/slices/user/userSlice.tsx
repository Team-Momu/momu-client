// user에 들어가야 하는 정보
// 사진, 아이디, 먹비티아이, 등급, 채택건수, 스크랩 게시물 아이디,,?

import { createSlice } from '@reduxjs/toolkit';
import { kakao } from './userThunk';
import { IUser } from '../../../utils/interfaces/user/userInterface';

export const initialState: IUser = {
  status: '',
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
    });
    builder.addCase(kakao.rejected, (state, action) => {
      state.status = 'failed';
    });
  },
});

export default userSlice.reducer;
