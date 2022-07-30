import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IPlaceData,
  IPlaceObject,
} from 'utils/interfaces/comment/commentInterface';

const initialState: any = {
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
    resetPlaceData: (state, action: PayloadAction<{ nullText: string }>) => {
      state.isSelected = false;
      state.place.address_name = action.payload.nullText;
      state.place.category_group_code = action.payload.nullText;
      state.place.category_group_name = action.payload.nullText;
      state.place.category_name = action.payload.nullText;
      state.place.distance = action.payload.nullText;
      state.place.id = action.payload.nullText;
      state.place.phone = action.payload.nullText;
      state.place.place_name = action.payload.nullText;
      state.place.place_url = action.payload.nullText;
      state.place.road_address_name = action.payload.nullText;
      state.place.x = action.payload.nullText;
      state.place.y = action.payload.nullText;
    },
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
export const { resetPlaceData } = PlaceChoiceSlice.actions;

export default PlaceChoiceSlice.reducer;
