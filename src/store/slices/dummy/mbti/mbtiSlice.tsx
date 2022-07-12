//GetCurationCard, AddCurationCard..등에 사용되는 내용.

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IMbti, IState } from 'interfaces.tsx/mbti/mbtiInterface';

export const initialState: IState = {
  status: '',
  error: null,

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
  mbti: { first: '', second: '', third: '', fourth: '' },
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

const addMbti = createAsyncThunk('mbti/addMbti', async (mbtiData) => {
  const response = await axios.post('', mbtiData);
  return response.data;
});

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
    addStage1: (state, action) => {
      state.result.stage1 = '퓨전식';
    },
    resetStage1: (state, action) => {
      state.result.stage1 = '';
    },
    addUpStage2: (state, action) => {
      state.result.stage2 = 'up';
    },
    addDownStage2: (state, action) => {
      state.result.stage2 = 'down';
    },
    addUpStage3: (state, action) => {
      state.result.stage3 = 'up';
    },
    addDownStage3: (state, action) => {
      state.result.stage3 = 'down';
    },
    addUpStage4: (state, action) => {
      state.result.stage4 = 'up';
    },
    addDownStage4: (state, action) => {
      state.result.stage4 = 'down';
    },
    setStage5Number: (
      state,
      action: PayloadAction<{ stage5Number: number }>
    ) => {
      state.result.stage5 = action.payload.stage5Number;
    },
    addLeftStage6: (state, action) => {
      state.result.stage6 = 'left';
    },
    addRightStage6: (state, action) => {
      state.result.stage6 = 'right';
    },
    addLeftStage7: (state, action) => {
      state.result.stage7 = 'left';
    },
    addRightStage7: (state, action) => {
      state.result.stage7 = 'right';
    },
    addLeftStage8: (state, action) => {
      state.result.stage8 = 'left';
    },
    addRightStage8: (state, action) => {
      state.result.stage8 = 'right';
    },
    addStage9: (state, action: PayloadAction<{ checkedInputs: string }>) => {
      state.result.stage9 = action.payload.checkedInputs;
    },
    setMbti: (state, action: PayloadAction<{ mbti: IMbti }>) => {
      state.mbti.first = action.payload.mbti.first;
      state.mbti.second = action.payload.mbti.second;
      state.mbti.third = action.payload.mbti.third;
      state.mbti.fourth = action.payload.mbti.fourth;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addMbti.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(addMbti.fulfilled, (state, { payload }) => {
      state.status = 'success';
    });
    builder.addCase(addMbti.rejected, (state, action) => {
      state.status = 'failed';
    });
  },
});

module.exports = mbtiSlice;
