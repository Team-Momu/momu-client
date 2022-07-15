import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import {
  DownSideLeftBox,
  DownSideMiddleBox,
  DownSideRightBox,
  MiddleSideLeftBox,
  MiddleSideMiddleBox,
  MiddleSideRightBox,
  UpSideLeftBox,
  UpSideMiddleBox,
  UpSideRightBox,
} from './MbtiSelectBoxStage5';

import { mbtiSlice } from '@slices/mbti/mbtiSlice';

const MbtiStage5 = () => {
  const upLeftStage5 = useSelector(
    (state: RootState) => state.mbti.stage5.upLeftStage5
  );
  const upMiddleStage5 = useSelector(
    (state: RootState) => state.mbti.stage5.upMiddleStage5
  );
  const upRightStage5 = useSelector(
    (state: RootState) => state.mbti.stage5.upRightStage5
  );
  const middleLeftStage5 = useSelector(
    (state: RootState) => state.mbti.stage5.middleLeftStage5
  );
  const middleMiddleStage5 = useSelector(
    (state: RootState) => state.mbti.stage5.middleMiddleStage5
  );
  const middleRightStage5 = useSelector(
    (state: RootState) => state.mbti.stage5.middleRightStage5
  );
  const downLeftStage5 = useSelector(
    (state: RootState) => state.mbti.stage5.downLeftStage5
  );
  const downMiddleStage5 = useSelector(
    (state: RootState) => state.mbti.stage5.downMiddleStage5
  );
  const downRightStage5 = useSelector(
    (state: RootState) => state.mbti.stage5.downRightStage5
  );
  const stage5 = useSelector((state: RootState) => state.mbti.result.stage5);
  const stage5Object = useSelector((state: RootState) => state.mbti.stage5);

  const stage5Array = Object.values(stage5Object);

  const dispatch = useDispatch();
  const findTypeOfBox = (typeOfBox: string) => {
    switch (typeOfBox) {
      case '음식 종류':
        dispatch(mbtiSlice.actions.changeUpLeftInStage5());
        break;
      case '건강한 레시피':
        dispatch(mbtiSlice.actions.changeUpMiddleInStage5());
        break;
      case '인테리어':
        dispatch(mbtiSlice.actions.changeUpRightInStage5());
        break;
      case '친절도, 서비스':
        dispatch(mbtiSlice.actions.changeMiddleLeftInStage5());
        break;
      case '청결도':
        dispatch(mbtiSlice.actions.changeMiddleMiddleInStage5());
        break;
      case '좌석 편안함':
        dispatch(mbtiSlice.actions.changeMiddleRightInStage5());
        break;
      case '공간의 쾌적함':
        dispatch(mbtiSlice.actions.changeDownLeftInStage5());
        break;
      case '식당 위치/동선':
        dispatch(mbtiSlice.actions.changeDownMiddleInStage5());
        break;
      case '조명':
        dispatch(mbtiSlice.actions.changeDownRightInStage5());
        break;
    }
  };

  useEffect(() => {
    let stage5Number = 0;
    stage5Array.map((k) => {
      if (k) {
        stage5Number++;
      }
      return stage5Number;
    });
    dispatch(mbtiSlice.actions.setStage5Number({ stage5Number }));
  }, [
    upLeftStage5,
    upMiddleStage5,
    upRightStage5,
    middleLeftStage5,
    middleMiddleStage5,
    middleRightStage5,
    downLeftStage5,
    downMiddleStage5,
    downRightStage5,
  ]);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      //@ts-ignore
      const typeOfBox: string = e.target.innerText;
      // console.log(typeOfBox);
      // dispatch(mbtiSlice.actions.resetAllActiveInStage5());
      findTypeOfBox(typeOfBox);
    },
    [
      upLeftStage5,
      upMiddleStage5,
      upRightStage5,
      middleLeftStage5,
      middleMiddleStage5,
      middleRightStage5,
      downLeftStage5,
      downMiddleStage5,
      downRightStage5,
    ]
  );

  return (
    <>
      <UpSideLeftBox onClick={onClick} active={upLeftStage5}>
        음식 종류
      </UpSideLeftBox>
      <UpSideMiddleBox onClick={onClick} active={upMiddleStage5}>
        건강한 레시피
      </UpSideMiddleBox>
      <UpSideRightBox onClick={onClick} active={upRightStage5}>
        인테리어
      </UpSideRightBox>
      <MiddleSideLeftBox onClick={onClick} active={middleLeftStage5}>
        친절도, 서비스
      </MiddleSideLeftBox>
      <MiddleSideMiddleBox onClick={onClick} active={middleMiddleStage5}>
        청결도
      </MiddleSideMiddleBox>
      <MiddleSideRightBox onClick={onClick} active={middleRightStage5}>
        좌석 편안함
      </MiddleSideRightBox>
      <DownSideLeftBox onClick={onClick} active={downLeftStage5}>
        공간의 쾌적함
      </DownSideLeftBox>
      <DownSideMiddleBox onClick={onClick} active={downMiddleStage5}>
        식당 위치/동선
      </DownSideMiddleBox>
      <DownSideRightBox onClick={onClick} active={downRightStage5}>
        조명
      </DownSideRightBox>
    </>
  );
};

export default MbtiStage5;
