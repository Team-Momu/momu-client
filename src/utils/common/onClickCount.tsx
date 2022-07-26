import { addCurationSlice } from '@slices/curation/addCurationSlice';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { useAppDispatch } from 'store/store';
import { findTypeOfCount } from './findTypeOfCount';

export const onClickCount = (e: any, dispatch: Dispatch<AnyAction>) => {
  const count = e.target.innerText;
  dispatch(addCurationSlice.actions.resetActiveInCount());
  findTypeOfCount(count, dispatch);
};
