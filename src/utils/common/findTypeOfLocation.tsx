import { addCurationSlice } from '@slices/curation/addCurationSlice';
import { useAppDispatch } from 'store/store';

export const findTypeOfLocation = (location: string) => {
  const dispatch = useAppDispatch();
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

const findTypeOfTime = (time: string) => {
  switch (time) {
    case '아침':
      dispatch(addCurationSlice.actions.changeActiveMorningInTime('아침'));
      break;
    case '점심':
      dispatch(addCurationSlice.actions.changeActiveAfternoonInTime('점심'));
      break;
    case '저녁':
      dispatch(addCurationSlice.actions.changeActiveEveningInTime('저녁'));
      break;
    case '밤':
      dispatch(addCurationSlice.actions.changeActiveMidnightInTime('밤'));
      break;
    default:
      break;
  }
};
