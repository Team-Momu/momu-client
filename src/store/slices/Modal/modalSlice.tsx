import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  searchModal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    searchModalToggle: (state) => {
      state.searchModal = !state.searchModal;
    },
  },
});

export default modalSlice.reducer;
