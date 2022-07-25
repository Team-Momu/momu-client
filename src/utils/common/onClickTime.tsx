import { addCurationSlice } from '@slices/curation/addCurationSlice';
import { useCallback } from 'react';
import { useAppDispatch } from 'store/store';
import { findTypeOfTime } from './findTypeOfTime';

export const onClickTime = useCallback((e: any) => {
  const dispatch = useAppDispatch();
  const time = e.target.innerText;

  dispatch(addCurationSlice.actions.resetActiveInTime());

  findTypeOfTime(time);
}, []);
