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
  stage5: {
    upLeftStage5: boolean;
    upMiddleStage5: boolean;
    upRightStage5: boolean;
    middleLeftStage5: boolean;
    middleMiddleStage5: boolean;
    middleRightStage5: boolean;
    downLeftStage5: boolean;
    downMiddleStage5: boolean;
    downRightStage5: boolean;
  };
  stage6: {
    leftStage6: boolean;
    rightStage6: boolean;
  };
  stage7: {
    leftStage7: boolean;
    rightStage7: boolean;
  };
  stage8: {
    leftStage8: boolean;
    rightStage8: boolean;
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
  stage5: {
    upLeftStage5: false,
    upMiddleStage5: false,
    upRightStage5: false,
    middleLeftStage5: false,
    middleMiddleStage5: false,
    middleRightStage5: false,
    downLeftStage5: false,
    downMiddleStage5: false,
    downRightStage5: false,
  },
  stage6: {
    leftStage6: false,
    rightStage6: false,
  },
  stage7: {
    leftStage7: false,
    rightStage7: false,
  },
  stage8: {
    leftStage8: false,
    rightStage8: false,
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
    resetAllActiveInStage5: (state, action) => {
      state.stage5.upLeftStage5 = false;
      state.stage5.upMiddleStage5 = false;
      state.stage5.upRightStage5 = false;
      state.stage5.middleLeftStage5 = false;
      state.stage5.middleMiddleStage5 = false;
      state.stage5.middleRightStage5 = false;
      state.stage5.downLeftStage5 = false;
      state.stage5.downMiddleStage5 = false;
      state.stage5.downRightStage5 = false;
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
    changeUpLeftInStage5: (state, action) => {
      state.stage5.upLeftStage5 = !state.stage5.upLeftStage5;
    },
    changeUpMiddleInStage5: (state, action) => {
      state.stage5.upMiddleStage5 = !state.stage5.upMiddleStage5;
    },
    changeUpRightInStage5: (state, action) => {
      state.stage5.upRightStage5 = !state.stage5.upRightStage5;
    },
    changeMiddleLeftInStage5: (state, action) => {
      state.stage5.middleLeftStage5 = !state.stage5.middleLeftStage5;
    },
    changeMiddleMiddleInStage5: (state, action) => {
      state.stage5.middleMiddleStage5 = !state.stage5.middleMiddleStage5;
    },
    changeMiddleRightInStage5: (state, action) => {
      state.stage5.middleRightStage5 = !state.stage5.middleRightStage5;
    },
    changeDownLeftInStage5: (state, action) => {
      state.stage5.downLeftStage5 = !state.stage5.downLeftStage5;
    },
    changeDownMiddleInStage5: (state, action) => {
      state.stage5.downMiddleStage5 = !state.stage5.downMiddleStage5;
    },
    changeDownRightInStage5: (state, action) => {
      state.stage5.downRightStage5 = !state.stage5.downRightStage5;
    },
    changeLeftInStage6: (state, action) => {
      state.stage6.leftStage6 = !state.stage6.leftStage6;
    },
    changeRightInStage6: (state, action) => {
      state.stage6.rightStage6 = !state.stage6.rightStage6;
    },
    changeLeftInStage7: (state, action) => {
      state.stage7.leftStage7 = !state.stage7.leftStage7;
    },
    changeRightInStage7: (state, action) => {
      state.stage7.rightStage7 = !state.stage7.rightStage7;
    },
    changeLeftInStage8: (state, action) => {
      state.stage8.leftStage8 = !state.stage8.leftStage8;
    },
    changeRightInStage8: (state, action) => {
      state.stage8.rightStage8 = !state.stage8.rightStage8;
    },
    resetAllInStage6: (state, action) => {
      state.stage6.leftStage6 = false;
      state.stage6.rightStage6 = false;
    },
    resetAllInStage7: (state, action) => {
      state.stage7.leftStage7 = false;
      state.stage7.rightStage7 = false;
    },
    resetAllInStage8: (state, action) => {
      state.stage8.leftStage8 = false;
      state.stage8.rightStage8 = false;
    },
  },
});

// export const { changeState } = mbtiSlice.actions;

module.exports = mbtiSlice;