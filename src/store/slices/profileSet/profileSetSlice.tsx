import { createSlice } from '@reduxjs/toolkit';
import defaultImage from '@public/img/defaultProfile.png';
import { setProfile } from '@slices/profileSet/profileSetThunk';
import { StaticImageData } from 'next/image';

interface IInitialState {
  defaultImage: string | null | StaticImageData;
  currentImagePath: string | null;
  status: string;
  error: string | unknown;
  result: string;
}

const initialState: IInitialState = {
  defaultImage,
  currentImagePath: null,
  status: '',
  error: '',
  result: '',
};

const profileSetSlice = createSlice({
  name: 'profileSet',
  initialState,
  reducers: {
    changeProfileImage: (state, { payload }) => {
      state.currentImagePath = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setProfile.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(setProfile.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.result = payload.message;
    });
    builder.addCase(setProfile.rejected, (state, { payload }) => {
      state.status = 'failed';
      state.error = payload;
    });
  },
});

export default profileSetSlice.reducer;
