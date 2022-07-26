import { addCurationSlice } from '@slices/curation/addCurationSlice';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { findTypeOfTime } from './findTypeOfTime';

export const onClickTime = (e: any, dispatch: Dispatch<AnyAction>) => {
  const time = e.target.innerText;

  dispatch(addCurationSlice.actions.resetActiveInTime());

  findTypeOfTime(time, dispatch);
};
