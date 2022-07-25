import { addCurationSlice } from '@slices/curation/addCurationSlice';
import { useCallback } from 'react';
import { useAppDispatch } from 'store/store';
import { findTypeOfDrink } from './findTypeOfDrink';

export const onClickDrink = useCallback((e: any) => {
  const dispatch = useAppDispatch();
  const drink = e.target.innerText;

  dispatch(addCurationSlice.actions.resetActiveInDrink());
  findTypeOfDrink(drink);
}, []);
