//GetCurationCard, AddCurationCard..등에 사용되는 내용.

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface IState {
  stage1: {
    active: boolean;
    chooses: boolean;
  };
  stage2: {
    active: boolean;
    chooses: boolean;
  };
  stage3: {
    active: boolean;
    chooses: boolean;
  };
  stage4: {
    active: boolean;
    chooses: boolean;
  };
  stage5: {
    active: boolean;
    chooses: boolean;
  };
  stage6: {
    active: boolean;
    chooses: boolean;
  };
  stage7: {
    active: boolean;
    chooses: boolean;
  };
  stage8: {
    active: boolean;
    chooses: boolean;
  };
  stage9: {
    active: boolean;
    chooses: boolean;
  };
}

export const initialState = {
  stage1: {
    active: false,
    choosen: false,
  },
  stage2: {
    active: false,
    choosen: false,
  },
  stage3: {
    active: false,
    choosen: false,
  },
  stage4: {
    active: false,
    choosen: false,
  },
  stage5: {
    active: false,
    choosen: false,
  },
  stage6: {
    active: false,
    choosen: false,
  },
  stage7: {
    active: false,
    choosen: false,
  },
  stage8: {
    active: false,
    choosen: false,
  },
  stage9: {
    active: false,
    choosen: false,
  },
};

const mbtiSlice = createSlice({
  name: 'mbti',
  initialState,
  reducers: {
    changeActiveInState1: (state, action) => {
      state.stage1.active = !state.stage1.active;
    },
    changeChoosenInState1: (state, action) => {
      state.stage1.choosen = !state.stage1.choosen;
    },
  },
});

// export const { changeState } = mbtiSlice.actions;

module.exports = mbtiSlice;
