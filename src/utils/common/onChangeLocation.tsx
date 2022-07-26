import { addCurationSlice } from '@slices/curation/addCurationSlice';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { findTypeOfLocation } from './findTypeOfLocation';

export const onChangeLocation = (e: any, dispatch: Dispatch<AnyAction>) => {
  const location = e.target.value;
  dispatch(addCurationSlice.actions.resetLocation());
  findTypeOfLocation(location, dispatch);
};
