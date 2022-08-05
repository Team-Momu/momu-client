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
  userNext: null,
  scrapNext: null,
  error: null,
};

export const getCurationWrittenByUserThunk = createAsyncThunk(
  'mypage/getCurationWrittenByUser',
  async (thunkAPI) => {
    const response = await axios.get('/user/profile/post/');
    return response.data;
  }
);

export const getMoreCurationWrittenByUserThunk = createAsyncThunk(
  'mypage/getMoreCurationWrittenByUser',
  async (cursor: string, thunkAPI) => {
    const response = await axios.get(`/user/profile/post/?cursor=${cursor}`);
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

export const getMoreCurationScrappedByUserThunk = createAsyncThunk(
  'mypage/getMoreCurationScrappedByUser',
  async (cursor: string, thunkAPI) => {
    const response = await axios.get(`/user/profile/scrap/?cursor=${cursor}`);
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
      .addCase(getMoreCurationWrittenByUserThunk.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getMoreCurationScrappedByUserThunk.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getCurationWrittenByUserThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.message = action.payload.message;
        state.data = action.payload.data;
        state.userNext = action.payload.data.post.next;
      })
      .addCase(getCurationScrappedByUserThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.message = action.payload.message;
        state.data = action.payload.data;
        state.scrapNext = action.payload.data.post.next;
      })
      .addCase(getMoreCurationWrittenByUserThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.data.profile = action.payload.data.profile;
        state.userNext = action.payload.data.post.next;
        state.data.post.results = state.data.post.results.concat(
          action.payload.data.post.results
        );
      })
      .addCase(
        getMoreCurationScrappedByUserThunk.fulfilled,
        (state, action) => {
          state.pending = false;
          state.data.profile = action.payload.data.profile;
          state.scrapNext = action.payload.data.post.next;
          state.data.post.results = state.data.post.results.concat(
            action.payload.data.post.results
          );
        }
      )
      .addCase(getCurationWrittenByUserThunk.rejected, (state, action) => {
        state.pending = false;
        // console.log(action.error);
      })
      .addCase(getCurationScrappedByUserThunk.rejected, (state, action) => {
        state.pending = false;
        // console.log(action.error);
      })
      .addCase(getMoreCurationWrittenByUserThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getMoreCurationScrappedByUserThunk.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default mypageSlice.reducer;
