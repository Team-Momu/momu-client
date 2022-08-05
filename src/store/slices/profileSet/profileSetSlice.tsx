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
  setProfilePending: boolean;
  setProfileSuccess: boolean;
  setProfileFail: boolean;
}

const initialState: IInitialState = {
  defaultImage,
  currentImagePath: null,
  status: '',
  error: '',
  result: '',
  setProfilePending: false,
  setProfileSuccess: false,
  setProfileFail: false,
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
      state.setProfilePending = true;
      state.setProfileSuccess = false;
      state.setProfileFail = false;
    });
    builder.addCase(setProfile.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.result = payload.message;
      state.setProfilePending = false;
      state.setProfileSuccess = true;
      state.setProfileFail = false;
    });
    builder.addCase(setProfile.rejected, (state, { payload }) => {
      state.status = 'failed';
      state.error = payload;
      state.setProfilePending = false;
      state.setProfileSuccess = false;
      state.setProfileFail = true;
    });
  },
});

export default profileSetSlice.reducer;
