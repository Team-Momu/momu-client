import { addCurationSlice } from '@slices/curation/addCurationSlice';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { useAppDispatch } from 'store/store';

export const findTypeOfLocation = (
  location: string,
  dispatch: Dispatch<AnyAction>
) => {
  switch (location) {
    case '신촌,홍대 부근 동네를 선택해주세요!':
      dispatch(
        addCurationSlice.actions.setDefaultLocation(
          '신촌,홍대 부근 동네를 선택해주세요!'
        )
      );
      break;
    case '신촌동':
      dispatch(
        addCurationSlice.actions.changeActiveSinchonInLocation('신촌동')
      );
      break;
    case '창천동':
      dispatch(
        addCurationSlice.actions.changeActiveChangchonInLocation('창천동')
      );
      break;
    case '연희동':
      dispatch(
        addCurationSlice.actions.changeActiveYeonhuiInLocation('연희동')
      );
      break;
    case '대현동':
      dispatch(
        addCurationSlice.actions.changeActiveDaehyeonInLocation('대현동')
      );
      break;
    case '대신동':
      dispatch(
        addCurationSlice.actions.changeActiveDaeshinInLocation('대신동')
      );
      break;

    case '연남동':
      dispatch(
        addCurationSlice.actions.changeActiveYeonnamInLocation('연남동')
      );
      break;
    case '서교동':
      dispatch(addCurationSlice.actions.changeActiveSeogyoInLocation('서교동'));
      break;
    case '동교동':
      dispatch(
        addCurationSlice.actions.changeActiveDonggyoInLocation('동교동')
      );
      break;
    case '합정동':
      dispatch(
        addCurationSlice.actions.changeActiveHapjeongInLocation('합정동')
      );
      break;
    case '망원동':
      dispatch(
        addCurationSlice.actions.changeActiveMangwonInLocation('망원동')
      );
      break;
    case '상수동':
      dispatch(addCurationSlice.actions.changeActiveSangsuInLocation('상수동'));
      break;

    default:
      break;
  }
};
