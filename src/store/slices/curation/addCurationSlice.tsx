import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAddCuration } from 'utils/interfaces/curation/curationInterfaces';
import { addCurationData } from '@slices/curation/addCurationThunk';
import { kakao } from '@slices/user/userThunk';
import axios from 'axios';

const initialState = {
  status: '',
  data: {
    location: '',
    time: '',
    drink: null || '',
    member_count: 0 || '',
    description: '',
  },
  location: {
    default: true,
    sinchon: false,
    changchon: false,
    yeonhui: false,
    daehyeon: false,
    daeshin: false,
    yeonnam: false,
    seogyo: false,
    donggyo: false,
    hapjeong: false,
    mangwon: false,
    sangsu: false,
  },
  time: {
    morning: false,
    afternoon: false,
    evening: false,
    midnight: false,
  },
  drink: {
    not: false,
    little: false,
    much: false,
  },
  member_count: {
    alone: false,
    two: false,
    three: false,
    moreThanFive: false,
  },
  description: {
    text: '',
  },
};

export const addCurationSlice = createSlice({
  name: 'addCuration',
  initialState,
  reducers: {
    resetData: (state) => {
      state.data.description = '';
      state.data.drink = '';
      state.data.location = '';
      state.data.member_count = '';
      state.data.time = '';
    },
    resetStatus: (state) => {
      state.status = '';
    },
    resetLocation: (state) => {
      state.location.default = false;
      state.location.sinchon = false;
      state.location.changchon = false;
      state.location.yeonhui = false;
      state.location.daehyeon = false;
      state.location.daeshin = false;
      state.location.yeonnam = false;
      state.location.seogyo = false;
      state.location.donggyo = false;
      state.location.hapjeong = false;
      state.location.mangwon = false;
      state.location.sangsu = false;
    },
    setDefaultLocation: (state, { payload }) => {
      state.location.default = !state.location.default;
      state.data.location = payload;
    },
    changeActiveSinchonInLocation: (state, { payload }) => {
      state.location.sinchon = !state.location.sinchon;
      state.data.location = payload;
    },
    changeActiveChangchonInLocation: (state, { payload }) => {
      state.location.changchon = !state.location.changchon;
      state.data.location = payload;
    },
    changeActiveYeonhuiInLocation: (state, { payload }) => {
      state.location.yeonhui = !state.location.yeonhui;
      state.data.location = payload;
    },
    changeActiveDaehyeonInLocation: (state, { payload }) => {
      state.location.daehyeon = !state.location.daehyeon;
      state.data.location = payload;
    },
    changeActiveDaeshinInLocation: (state, { payload }) => {
      state.location.daeshin = !state.location.daeshin;
      state.data.location = payload;
    },
    changeActiveYeonnamInLocation: (state, { payload }) => {
      state.location.yeonnam = !state.location.yeonnam;
      state.data.location = payload;
    },
    changeActiveSeogyoInLocation: (state, { payload }) => {
      state.location.seogyo = !state.location.seogyo;
      state.data.location = payload;
    },
    changeActiveDonggyoInLocation: (state, { payload }) => {
      state.location.donggyo = !state.location.donggyo;
      state.data.location = payload;
    },
    changeActiveHapjeongInLocation: (state, { payload }) => {
      state.location.hapjeong = !state.location.hapjeong;
      state.data.location = payload;
    },
    changeActiveMangwonInLocation: (state, { payload }) => {
      state.location.mangwon = !state.location.mangwon;
      state.data.location = payload;
    },
    changeActiveSangsuInLocation: (state, { payload }) => {
      state.location.sangsu = !state.location.sangsu;
      state.data.location = payload;
    },
    resetActiveInTime: (state) => {
      state.time.morning = false;
      state.time.afternoon = false;
      state.time.evening = false;
      state.time.midnight = false;
    },
    changeActiveMorningInTime: (state, { payload }) => {
      state.time.morning = !state.time.morning;
      state.data.time = payload;
    },
    changeActiveAfternoonInTime: (state, { payload }) => {
      state.time.afternoon = !state.time.afternoon;
      state.data.time = payload;
    },
    changeActiveEveningInTime: (state, { payload }) => {
      state.time.evening = !state.time.evening;
      state.data.time = payload;
    },
    changeActiveMidnightInTime: (state, { payload }) => {
      state.time.midnight = !state.time.midnight;
      state.data.time = payload;
    },
    resetActiveInDrink: (state) => {
      state.drink.not = false;
      state.drink.little = false;
      state.drink.much = false;
    },
    changeActiveNotInDrink: (state, { payload }) => {
      state.drink.not = !state.drink.not;
      state.data.drink = payload;
    },
    changeActiveLittleInDrink: (state, { payload }) => {
      state.drink.little = !state.drink.little;
      state.data.drink = payload;
    },
    changeActiveMuchInDrink: (state, { payload }) => {
      state.drink.much = !state.drink.much;
      state.data.drink = payload;
    },
    resetActiveInCount: (state) => {
      state.member_count.alone = false;
      state.member_count.two = false;
      state.member_count.three = false;
      state.member_count.moreThanFive = false;
    },
    changeActiveAlonInCount: (state, { payload }) => {
      state.member_count.alone = !state.member_count.alone;
      state.data.member_count = payload;
    },
    changeActiveTwoInCount: (state, { payload }) => {
      state.member_count.two = !state.member_count.two;
      state.data.member_count = payload;
    },
    changeActiveThreeInCount: (state, { payload }) => {
      state.member_count.three = !state.member_count.three;
      state.data.member_count = payload;
    },
    changeActiveMoreThanFiveInCount: (state, { payload }) => {
      state.member_count.moreThanFive = !state.member_count.moreThanFive;
      state.data.member_count = payload;
    },
    onClickComplete: (state, { payload }) => {
      state.data.description = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCurationData.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(addCurationData.fulfilled, (state) => {
      state.status = 'success';
    });
    builder.addCase(addCurationData.rejected, (state, action) => {
      state.status = 'failed';
    });
  },
});

export default addCurationSlice.reducer;
