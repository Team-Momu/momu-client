import { addCurationSlice } from '@slices/curation/addCurationSlice';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { findTypeOfDrink } from './findTypeOfDrink';

export const onClickDrink = (e: any, dispatch: Dispatch<AnyAction>) => {
  const drink = e.target.innerText;

  dispatch(addCurationSlice.actions.resetActiveInDrink());
  findTypeOfDrink(drink, dispatch);
};
