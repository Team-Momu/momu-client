// user에 들어가야 하는 정보
// 사진, 아이디, 먹비티아이, 등급, 채택건수, 스크랩 게시물 아이디,,?

import { createSlice } from '@reduxjs/toolkit';

export interface IUserType {
  img: string;
  id: string;
  mbti: string;
  stage: number;
  selectedCurating: number;
  scrappedCuration: number;
}

export const initialState = {
  img: '',
  id: '',
  mbti: '',
  stage: 0,
  selectedCurating: 0,
  scrappedCuration: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserInfo: (state, action) => {
      state.img = '';
      state.id = 'chaaerim';
      state.mbti = 'ENFJ';
      state.stage = 10;
      state.selectedCurating = 3;
      state.scrappedCuration = 3;
    },
  },
  extraReducers: {},
});

export const { fetchUserInfo } = userSlice.actions;
module.exports = userSlice;
