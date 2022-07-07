//GetCurationCard, AddCurationCard..등에 사용되는 내용.

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface IState {
  result: [];
  stage1: {
    korea: boolean;
    china: boolean;
    japan: boolean;
    western: boolean;
    fusion: boolean;
    snack: boolean;
  };
}

export const initialState = {
  stage1: {
    korea: false,
    china: false,
    japan: false,
    western: false,
    fusion: false,
    snack: false,
  },
};

const mbtiSlice = createSlice({
  name: 'mbti',
  initialState,
  reducers: {
    resetAllActiveInStage1: (state, action) => {
      state.stage1.korea = false;
      state.stage1.china = false;
      state.stage1.japan = false;
      state.stage1.western = false;
      state.stage1.fusion = false;
      state.stage1.snack = false;
    },
    changeKoreaActiveInStage1: (state, action) => {
      state.stage1.korea = !state.stage1.korea;
    },
    changeChinaActiveInStage1: (state, action) => {
      state.stage1.china = !state.stage1.china;
    },
    changeJapanActiveInStage1: (state, action) => {
      state.stage1.japan = !state.stage1.japan;
    },
    changeWesternActiveInStage1: (state, action) => {
      state.stage1.western = !state.stage1.western;
    },
    changeFusionActiveInStage1: (state, action) => {
      state.stage1.fusion = !state.stage1.fusion;
    },
    changeSnackActiveInStage1: (state, action) => {
      state.stage1.snack = !state.stage1.snack;
    },
  },
});

// export const { changeState } = mbtiSlice.actions;

module.exports = mbtiSlice;
