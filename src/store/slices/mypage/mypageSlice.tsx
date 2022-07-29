import { IProfileContent } from 'utils/interfaces/mypage/mypageInterface';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: IProfileContent = {
  pending: false,
  message: '',
  data: {
    profile: {
      id: 0,
      nickname: '',
      profile_img: '',
      mbti: '',
      level: 5,
      select_count: 0,
    },
    post: {
      next: '',
      previous: '',
      results: [],
    },
  },
};

export const getCurationWrittenByUserThunk = createAsyncThunk(
  'mypage/getCurationWrittenByUser',
  async (thunkAPI) => {
    const response = await axios.get('/user/profile/post/');
    return response.data;
  }
);

export const getCurationScrappedByUserThunk = createAsyncThunk(
  'mypage/getCurationScrappedByUser',
  async (thunkAPI) => {
    const response = await axios.get('/user/profile/scrap/');
    return response.data;
  }
);

export const mypageSlice = createSlice({
  name: 'mypage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurationWrittenByUserThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(getCurationScrappedByUserThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(getCurationWrittenByUserThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.message = action.payload.message;
        state.data = action.payload.data;
      })
      .addCase(getCurationScrappedByUserThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.message = action.payload.message;
        state.data = action.payload.data;
      })
      .addCase(getCurationWrittenByUserThunk.rejected, (state, action) => {
        state.pending = false;
        console.log(action.error);
      })
      .addCase(getCurationScrappedByUserThunk.rejected, (state, action) => {
        state.pending = false;
        console.log(action.error);
      });
  },
});

export default mypageSlice.reducer;
