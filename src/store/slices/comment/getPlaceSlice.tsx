import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IGetPlaceData } from 'utils/interfaces/comment/commentInterface';
import axios from 'axios';

const initialState: IGetPlaceData = {
  status: '',
  error: '',
  pending: false,
  message: '',
  data: [],
  page: 0,
  total: 0,
  previous: null,
  next: null,
  keyword: null,
};

export const getPlaceDatasThunk = createAsyncThunk(
  'comments/getPlaceDatas',
  async (keyword: string, thunkAPI) => {
    // const access_token = localStorage.getItem('access_token');
    // axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    const response = await axios.get(`/feed/search/?keyword=${keyword}`);
    return response.data;
  }
);

interface ISearchInfoType {
  keyword: string | null | undefined;
  page: any;
}
export const getMorePlaceDatasThunk = createAsyncThunk(
  'comments/getMorePlaceDatas',
  async ({ keyword, page }: ISearchInfoType, thunkAPI) => {
    // const access_token = localStorage.getItem('access_token');
    // axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    const response = await axios.get(
      `/feed/search/?keyword=${keyword}&page=${page}`
    );
    return response.data;
  }
);

export const getPlaceSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlaceDatasThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(getPlaceDatasThunk.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.data = action.payload.data;
        state.page = action.payload.page;
        state.total = action.payload.total;
        state.previous = action.payload.previous;
        state.next = action.payload.next;
        state.pending = false;
      })
      .addCase(getPlaceDatasThunk.rejected, (state, action) => {
        state.pending = false;

        console.error(action.error);
      })
      .addCase(getMorePlaceDatasThunk.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getMorePlaceDatasThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.status = 'success';
        state.previous = action.payload.previous;
        state.next = action.payload.next;
        state.data = state.data.concat(action?.payload.data);
      })
      .addCase(getMorePlaceDatasThunk.rejected, (state, action) => {
        state.pending = false;
        state.status = 'rejected';
        state.error = action.error;
      });
  },
});

export default getPlaceSlice.reducer;
