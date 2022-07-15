import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import {
  DownSideBoxPositionInStage2,
  UpSideBoxPositionInStage2,
} from './MbtiSelectBoxStage2';
import { mbtiSlice } from '@slices/mbti/mbtiSlice';
export const MbtiStage2 = () => {
  const up = useAppSelector((state: RootState) => state.mbti.stage2.up);
  const down = useAppSelector((state: RootState) => state.mbti.stage2.down);
  const dispatch = useAppDispatch();
  const onClickStage2 = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      // @ts-ignore
      const typeOfBox: string = e.target.innerText[0];

      dispatch(mbtiSlice.actions.resetAllInStage2());

      // 눌렀을 때 박스 인식 후 토글
      if (typeOfBox === '가') {
        //위쪽 박스
        dispatch(mbtiSlice.actions.changeUpInStage2());
      } else {
        //아래쪽 박스 선택
        dispatch(mbtiSlice.actions.changeDownInStage2());
      }
    },
    [up, down]
  );

  useEffect(() => {
    if (up) {
      dispatch(mbtiSlice.actions.addUpStage2());
    }
    if (down) {
      dispatch(mbtiSlice.actions.addDownStage2());
    }
  }, [up, down]);

  return (
    <>
      <UpSideBoxPositionInStage2 onClick={onClickStage2} active={up}>
        가본 적 없는 새로운 식당
      </UpSideBoxPositionInStage2>
      <DownSideBoxPositionInStage2 onClick={onClickStage2} active={down}>
        항상 가는 익숙한 식당
      </DownSideBoxPositionInStage2>
    </>
  );
};

export default MbtiStage2;
