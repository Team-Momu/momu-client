import { addCurationSlice } from '@slices/curation/addCurationSlice';
import { useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

export const findTypeOfDrink = (
  drink: string,
  dispatch: Dispatch<AnyAction>
) => {
  switch (drink) {
    case '안 마셔요':
      dispatch(addCurationSlice.actions.changeActiveNotInDrink(0));
      break;
    case '간술만!':
      dispatch(addCurationSlice.actions.changeActiveLittleInDrink(1));
      break;
    case '마실래요':
      dispatch(addCurationSlice.actions.changeActiveMuchInDrink(2));
      break;
    default:
      break;
  }
};
