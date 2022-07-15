import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';

import {
  DownSideBoxPositionInStage4,
  UpSideBoxPositionInStage4,
} from './MbtiSelectBoxStage4';
import { mbtiSlice } from '@slices/mbti/mbtiSlice';
export const MbtiStage4 = () => {
  const up = useSelector((state: RootState) => state.mbti.stage4.up);
  const down = useSelector((state: RootState) => state.mbti.stage4.down);
  const dispatch = useDispatch();
  const onClickStage4 = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      //@ts-ignore
      const typeOfBox: string = e.target.innerText[0];

      dispatch(mbtiSlice.actions.resetAllInStage4());

      // 눌렀을 때 박스 인식 후 토글
      if (typeOfBox === '음') {
        //위쪽 박스
        dispatch(mbtiSlice.actions.changeUpInStage4());
      } else {
        //아래쪽 박스 선택
        dispatch(mbtiSlice.actions.changeDownInStage4());
      }
    },
    [up, down]
  );

  useEffect(() => {
    if (up) {
      dispatch(mbtiSlice.actions.addUpStage4());
    }
    if (down) {
      dispatch(mbtiSlice.actions.addDownStage4());
    }
  }, [up, down]);

  return (
    <>
      <UpSideBoxPositionInStage4 onClick={onClickStage4} active={up}>
        음식 본연 맛 자체가 가장 중요!
      </UpSideBoxPositionInStage4>
      <DownSideBoxPositionInStage4 onClick={onClickStage4} active={down}>
        매장 분위기, 서비스, 인테리어도 맛만큼 중요!
      </DownSideBoxPositionInStage4>
    </>
  );
};

export default MbtiStage4;
