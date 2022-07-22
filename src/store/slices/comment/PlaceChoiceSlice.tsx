import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IPlaceData,
  IPlaceObject,
} from 'utils/interfaces/comment/commentInterface';

const initialState: IPlaceObject = {
  isSelected: false,
  place: {
    address_name: '',
    category_group_code: '',
    category_group_name: '',
    category_name: '',
    distance: '',
    id: '',
    phone: '',
    place_name: '',
    place_url: '',
    road_address_name: '',
    x: '',
    y: '',
  },
};

export const PlaceChoiceSlice = createSlice({
  name: 'placechoice',
  initialState,
  reducers: {
    setPlaceData: (
      state,
      action: PayloadAction<{ placeData: IPlaceData; isSelected: boolean }>
    ) => {
      state.place = action.payload.placeData;
      state.isSelected = action.payload.isSelected;
    },
  },
});

export const { setPlaceData } = PlaceChoiceSlice.actions;

export default PlaceChoiceSlice.reducer;
