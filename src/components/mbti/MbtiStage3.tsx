import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store/store';

import {
  DownSideBoxPositionInStage3,
  UpSideBoxPositionInStage3,
} from './MbtiSelectBoxStage3';
import { mbtiSlice } from '@slices/mbti/mbtiSlice';
export const MbtiStage3 = () => {
  const up = useSelector((state: RootState) => state.mbti.stage3.up);
  const down = useSelector((state: RootState) => state.mbti.stage3.down);
  const dispatch = useAppDispatch();
  const onClickStage3 = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      //@ts-ignore
      const typeOfBox: string = e.target.innerText[0];

      dispatch(mbtiSlice.actions.resetAllInStage3());

      // 눌렀을 때 박스 인식 후 토글
      if (typeOfBox === '신') {
        //위쪽 박스
        dispatch(mbtiSlice.actions.changeUpInStage3());
      } else {
        //아래쪽 박스 선택
        dispatch(mbtiSlice.actions.changeDownInStage3());
      }
    },
    [up, down]
  );

  useEffect(() => {
    if (up) {
      dispatch(mbtiSlice.actions.addUpStage3());
    }
    if (down) {
      dispatch(mbtiSlice.actions.addDownStage3());
    }
  }, [up, down]);

  return (
    <>
      <UpSideBoxPositionInStage3 onClick={onClickStage3} active={up}>
        신메뉴는 궁금해서 못 참지.
      </UpSideBoxPositionInStage3>
      <DownSideBoxPositionInStage3 onClick={onClickStage3} active={down}>
        그래도 항상 먹던 게 편하지!
      </DownSideBoxPositionInStage3>
    </>
  );
};

export default MbtiStage3;
