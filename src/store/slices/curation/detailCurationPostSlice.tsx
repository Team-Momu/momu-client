import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IDetailCurationPost } from 'utils/interfaces/curation/curationInterfaces';
import axios from 'axios';

const initialState: IDetailCurationPost = {
  message: '',
  data: {
    id: 0,
    user: {
      id: 0,
      nickname: '',
      profile_img: '',
      mbti: '',
      level: 0,
      select_count: 0,
    },
    created_at: '',
    location: '',
    time: '',
    drink: 0,
    member_count: 0,
    comment_count: 0,
    description: '',
    selected_flag: false,
    scrap_flag: false,
    comments: [],
  },
  pending: false,
};

export const getCurationByIdThunk = createAsyncThunk(
  'detailCuration/getCurationById',
  async (post: number, thunkAPI) => {
    // const access_token = localStorage.getItem('access_token');
    // axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    const response = await axios.get(`/feed/${post}/`);
    return response.data;
  }
);

export const detailCurationPostSlice = createSlice({
  name: 'detailCuration',
  initialState,
  reducers: {
    setCurationDone: (state, action) => {
      state.data.selected_flag = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurationByIdThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(getCurationByIdThunk.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.data = action.payload.data;
        state.pending = false;
      })
      .addCase(getCurationByIdThunk.rejected, (state, action) => {
        state.pending = false;
        console.error(action.error);
      });
  },
});

export default detailCurationPostSlice.reducer;
