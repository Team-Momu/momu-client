//GetCurationCard, AddCurationCard..등에 사용되는 내용.

import { createSlice } from '@reduxjs/toolkit';
const { fetchCuration } = require('../../../actions/curation');

type stateType = {
  loading: boolean;
  area: string;
  when: string;
  isDrink: string;
  personnel: string;
  additionalText: string;
};

const initialState: stateType = {
  loading: false,
  area: '서울 신촌',
  when: '점심',
  isDrink: '술도 같이',
  personnel: '4명이상',
  additionalText: '안녕',
};
const curationSlice = createSlice({
  name: 'curation',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCuration?.pending.type]: (state, action) => {
      state.loading = true;
    },
    [fetchCuration?.fulfilled.type]: (state, action) => {
      state.loading = true;
      state.area = action.payload.area;
      state.when = action.payload.when;
      state.isDrink = action.payload.isDrink;
      state.personnel = action.payload.personnel;
      state.additionalText = action.payload.additionalTest;
    },

    [fetchCuration?.rejected.type]: (state, action) => {
      state.loading = true;
    },
  },
});

module.exports = curationSlice;
