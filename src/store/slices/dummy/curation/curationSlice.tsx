//GetCurationCard, AddCurationCard..등에 사용되는 내용.

import { createSlice } from '@reduxjs/toolkit';

export interface ICurationType {
  loading: boolean;
  area: string;
  when: string;
  isDrink: string;
  personnel: string;
  additionalText: string;
}

export const initialState = {
  loading: false,
  area: '',
  when: '',
  isDrink: '',
  personnel: '',
  additionalText: '',
};
const curationSlice = createSlice({
  name: 'curation',
  initialState,
  reducers: {
    fetchCurationInfo: (state, action) => {
      state.loading = true;
      state.area = '서울 신촌';
      state.when = '점심';
      state.isDrink = '술도 같이';
      state.personnel = '4명 이상';
      state.additionalText =
        '서울시가 잠이 든 시간에 아무 말 없는 밤 하늘은 침착해 그와 반대로 지금 내 심장은';
    },
  },
  extraReducers: {
    // [fetchCuration?.pending.type]: (state, action) => {
    //   state.loading = true;
    // },
    // [fetchCuration?.fulfilled.type]: (state, action) => {
    //   state.loading = true;
    //   state.area = action.payload.area;
    //   state.when = action.payload.when;
    //   state.isDrink = action.payload.isDrink;
    //   state.personnel = action.payload.personnel;
    //   state.additionalText = action.payload.additionalTest;
    // },
    // [fetchCuration?.rejected.type]: (state, action) => {
    //   state.loading = true;
    // },
  },
});

export const { fetchCurationInfo } = curationSlice.actions;

module.exports = curationSlice;
