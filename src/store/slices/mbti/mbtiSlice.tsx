//GetCurationCard, AddCurationCard..등에 사용되는 내용.

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IState } from 'utils/interfaces/mbti/mbtiInterface';
import { AppDispatch, RootState } from 'store/store';
import { addMbti } from './mbtiThunk';

export const initialState: IState = {
  status: '',
  error: null,
  accessToken: null,
  result: {
    stage1: '',
    stage2: '',
    stage3: '',
    stage4: '',
    stage5: 0,
    stage6: '',
    stage7: '',
    stage8: '',
    stage9: '',
  },
  mbti: '',
  stage1: {
    korea: false,
    china: false,
    japan: false,
    western: false,
    fusion: false,
    snack: false,
  },
  stage2: {
    up: false,
    down: false,
  },
  stage3: {
    up: false,
    down: false,
  },
  stage4: {
    up: false,
    down: false,
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
  stage9: {
    oneStage9: false,
    twoStage9: false,
    threeStage9: false,
    fourStage9: false,
    fiveStage9: false,
    sixStage9: false,
    sevenStage9: false,
  },
};

export const mbtiSlice = createSlice({
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
    changeKoreaActiveInStage1: (state) => {
      state.stage1.korea = !state.stage1.korea;
    },
    changeChinaActiveInStage1: (state) => {
      state.stage1.china = !state.stage1.china;
    },
    changeJapanActiveInStage1: (state) => {
      state.stage1.japan = !state.stage1.japan;
    },
    changeWesternActiveInStage1: (state) => {
      state.stage1.western = !state.stage1.western;
    },
    changeFusionActiveInStage1: (state) => {
      state.stage1.fusion = !state.stage1.fusion;
    },
    changeSnackActiveInStage1: (state) => {
      state.stage1.snack = !state.stage1.snack;
    },
    resetAllInStage2: (state) => {
      state.stage2.up = false;
      state.stage2.down = false;
    },
    changeUpInStage2: (state) => {
      state.stage2.up = !state.stage2.up;
    },
    changeDownInStage2: (state) => {
      state.stage2.down = !state.stage2.down;
    },
    resetAllInStage3: (state) => {
      state.stage3.up = false;
      state.stage3.down = false;
    },
    changeUpInStage3: (state) => {
      state.stage3.up = !state.stage3.up;
    },
    changeDownInStage3: (state) => {
      state.stage3.down = !state.stage3.down;
    },
    resetAllInStage4: (state) => {
      state.stage4.up = false;
      state.stage4.down = false;
    },
    changeUpInStage4: (state) => {
      state.stage4.up = !state.stage4.up;
    },
    changeDownInStage4: (state) => {
      state.stage4.down = !state.stage4.down;
    },
    changeUpLeftInStage5: (state) => {
      state.stage5.upLeftStage5 = !state.stage5.upLeftStage5;
    },
    changeUpMiddleInStage5: (state) => {
      state.stage5.upMiddleStage5 = !state.stage5.upMiddleStage5;
    },
    changeUpRightInStage5: (state) => {
      state.stage5.upRightStage5 = !state.stage5.upRightStage5;
    },
    changeMiddleLeftInStage5: (state) => {
      state.stage5.middleLeftStage5 = !state.stage5.middleLeftStage5;
    },
    changeMiddleMiddleInStage5: (state) => {
      state.stage5.middleMiddleStage5 = !state.stage5.middleMiddleStage5;
    },
    changeMiddleRightInStage5: (state) => {
      state.stage5.middleRightStage5 = !state.stage5.middleRightStage5;
    },
    changeDownLeftInStage5: (state) => {
      state.stage5.downLeftStage5 = !state.stage5.downLeftStage5;
    },
    changeDownMiddleInStage5: (state) => {
      state.stage5.downMiddleStage5 = !state.stage5.downMiddleStage5;
    },
    changeDownRightInStage5: (state) => {
      state.stage5.downRightStage5 = !state.stage5.downRightStage5;
    },
    changeLeftInStage6: (state) => {
      state.stage6.leftStage6 = !state.stage6.leftStage6;
    },
    changeRightInStage6: (state) => {
      state.stage6.rightStage6 = !state.stage6.rightStage6;
    },
    changeLeftInStage7: (state) => {
      state.stage7.leftStage7 = !state.stage7.leftStage7;
    },
    changeRightInStage7: (state) => {
      state.stage7.rightStage7 = !state.stage7.rightStage7;
    },
    changeLeftInStage8: (state) => {
      state.stage8.leftStage8 = !state.stage8.leftStage8;
    },
    changeRightInStage8: (state) => {
      state.stage8.rightStage8 = !state.stage8.rightStage8;
    },
    resetAllInStage6: (state) => {
      state.stage6.leftStage6 = false;
      state.stage6.rightStage6 = false;
    },
    resetAllInStage7: (state) => {
      state.stage7.leftStage7 = false;
      state.stage7.rightStage7 = false;
    },
    resetAllInStage8: (state) => {
      state.stage8.leftStage8 = false;
      state.stage8.rightStage8 = false;
    },
    addStage1: (state) => {
      state.result.stage1 = '퓨전식';
    },
    resetStage1: (state) => {
      state.result.stage1 = '';
    },
    addUpStage2: (state) => {
      state.result.stage2 = 'up';
    },
    addDownStage2: (state) => {
      state.result.stage2 = 'down';
    },
    addUpStage3: (state) => {
      state.result.stage3 = 'up';
    },
    addDownStage3: (state) => {
      state.result.stage3 = 'down';
    },
    addUpStage4: (state) => {
      state.result.stage4 = 'up';
    },
    addDownStage4: (state) => {
      state.result.stage4 = 'down';
    },
    setStage5Number: (
      state,
      action: PayloadAction<{ stage5Number: number }>
    ) => {
      state.result.stage5 = action.payload.stage5Number;
    },
    addLeftStage6: (state) => {
      state.result.stage6 = 'left';
    },
    addRightStage6: (state) => {
      state.result.stage6 = 'right';
    },
    addLeftStage7: (state) => {
      state.result.stage7 = 'left';
    },
    addRightStage7: (state) => {
      state.result.stage7 = 'right';
    },
    addLeftStage8: (state) => {
      state.result.stage8 = 'left';
    },
    addRightStage8: (state) => {
      state.result.stage8 = 'right';
    },
    addStage9: (state, action: PayloadAction<{ checkedInputs: string }>) => {
      state.result.stage9 = action.payload.checkedInputs;
    },
    resetAllStage9: (state) => {
      state.stage9.oneStage9 = false;
      state.stage9.twoStage9 = false;
      state.stage9.threeStage9 = false;
      state.stage9.fourStage9 = false;
      state.stage9.fiveStage9 = false;
      state.stage9.sixStage9 = false;
      state.stage9.sevenStage9 = false;
    },
    changeOneStage9: (state) => {
      state.stage9.oneStage9 = !state.stage9.oneStage9;
    },
    changeTwoStage9: (state) => {
      state.stage9.twoStage9 = !state.stage9.twoStage9;
    },
    changeThreeStage9: (state) => {
      state.stage9.threeStage9 = !state.stage9.threeStage9;
    },
    changeFourStage9: (state) => {
      state.stage9.fourStage9 = !state.stage9.fourStage9;
    },
    changeFiveStage9: (state) => {
      state.stage9.fiveStage9 = !state.stage9.fiveStage9;
    },
    changeSixStage9: (state) => {
      state.stage9.sixStage9 = !state.stage9.sixStage9;
    },
    changeSevenStage9: (state) => {
      state.stage9.sevenStage9 = !state.stage9.sevenStage9;
    },

    setMbti: (state, action: PayloadAction<{ mbti: string }>) => {
      state.mbti = action.payload.mbti;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addMbti.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(addMbti.fulfilled, (state, { payload }) => {
      state.status = 'success';
    });
    builder.addCase(addMbti.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export default mbtiSlice.reducer;
