import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import {
  DownSideBoxPositionInStage2,
  UpSideBoxPositionInStage2,
} from './MbtiSelectBoxStage2';
import {
  DownSideBoxPositionInStage3,
  UpSideBoxPositionInStage3,
} from './MbtiSelectBoxStage3';
import {
  DownSideBoxPositionInStage4,
  UpSideBoxPositionInStage4,
} from './MbtiSelectBoxStage4';
import { UpSideLeftBox } from './MbtiSelectBoxStage5';
import MbtiStage5 from './MbtiStage5';
import MbtiStage6 from './MbtiStage6';
import MbtiStage7 from './MbtiStage7';
import MbtiStage8 from './MbtiStage8';
import MbtiStage9 from './MbtiStage9';
import MbtiStage1 from './MbtiStage1';
const mbtiSlice = require('@slices/dummy/mbti/mbtiSlice');

const MbtiArticle = () => {
  const router = useRouter();
  const stageNumber: number = Number(router.asPath.split('/')[2]);
  const dispatch = useDispatch();
  const result = useSelector((state: RootState) => state.mbti.result);

  //stage2
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  //stage3
  const [upStage3, setUpStage3] = useState(false);
  const [downStage3, setDownStage3] = useState(false);
  //stage4
  const [upStage4, setUpStage4] = useState(false);
  const [downStage4, setDownStage4] = useState(false);

  const onClickStage2 = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      // @ts-ignore
      const typeOfBox: string = e.target.innerText[0];
      // 둘 중에 하나라도 누른 상태에서 다른 것을 눌렀을 때 처리

      setActive1(false);
      setActive2(false);

      // 눌렀을 때 박스 인식 후 토글
      if (typeOfBox === '가') {
        //위쪽 박스
        setActive1((prev) => !prev);
      } else {
        //아래쪽 박스 선택
        setActive2((prev) => !prev);
      }
    },
    [active1, active2]
  );

  // 여기서 최종 선택 점수 알고리즘
  useEffect(() => {
    if (active1) {
      dispatch(mbtiSlice.actions.addUpStage2());
    }
    if (active2) {
      dispatch(mbtiSlice.actions.addDownStage2());
    }
    if (upStage3) {
      dispatch(mbtiSlice.actions.addUpStage3());
    }
    if (downStage3) {
      dispatch(mbtiSlice.actions.addDownStage3());
    }
    if (upStage4) {
      dispatch(mbtiSlice.actions.addUpStage4());
    }
    if (downStage4) {
      dispatch(mbtiSlice.actions.addDownStage4());
    }
  }, [dispatch, active1, active2, upStage3, downStage3, upStage4, downStage4]);

  const onClickStage3 = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      //@ts-ignore
      const typeOfBox: string = e.target.innerText[0];

      if (upStage3 === true || downStage3 === true) {
        setUpStage3(false);
        setDownStage3(false);
      }
      // 눌렀을 때 박스 인식 후 토글
      if (typeOfBox === '신') {
        //위쪽 박스
        setUpStage3((prev) => !prev);
      } else {
        //아래쪽 박스 선택
        setDownStage3((prev) => !prev);
      }
    },
    [upStage3, downStage3]
  );

  const onClickStage4 = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      //@ts-ignore
      const typeOfBox: string = e.target.innerText[0];

      if (upStage4 === true || downStage4 === true) {
        setUpStage4(false);
        setDownStage4(false);
      }
      // 눌렀을 때 박스 인식 후 토글
      if (typeOfBox === '음') {
        //위쪽 박스
        setUpStage4((prev) => !prev);
      } else {
        //아래쪽 박스 선택
        setDownStage4((prev) => !prev);
      }
    },
    [upStage4, downStage4]
  );

  return (
    <>
      {stageNumber === 1 && (
        <>
          <MbtiStage1></MbtiStage1>
        </>
      )}
      {stageNumber === 2 && (
        <>
          <UpSideBoxPositionInStage2 onClick={onClickStage2} active={active1}>
            가본 적 없는 새로운 식당
          </UpSideBoxPositionInStage2>
          <DownSideBoxPositionInStage2 onClick={onClickStage2} active={active2}>
            항상 가는 익숙한 식당
          </DownSideBoxPositionInStage2>
        </>
      )}
      {stageNumber === 3 && (
        <>
          <UpSideBoxPositionInStage3 onClick={onClickStage3} active={upStage3}>
            신메뉴는 궁금해서 못 참지.
          </UpSideBoxPositionInStage3>
          <DownSideBoxPositionInStage3
            onClick={onClickStage3}
            active={downStage3}
          >
            그래도 항상 먹던 게 편하지!
          </DownSideBoxPositionInStage3>
        </>
      )}
      {stageNumber === 4 && (
        <>
          <UpSideBoxPositionInStage4 onClick={onClickStage4} active={upStage4}>
            음식 본연 맛 자체가 가장 중요!
          </UpSideBoxPositionInStage4>
          <DownSideBoxPositionInStage4
            onClick={onClickStage4}
            active={downStage4}
          >
            매장 분위기, 서비스, 인테리어도 맛만큼 중요!
          </DownSideBoxPositionInStage4>
        </>
      )}
      {stageNumber === 5 && (
        <>
          <MbtiStage5></MbtiStage5>
        </>
      )}
      {stageNumber === 6 && (
        <>
          <MbtiStage6></MbtiStage6>
        </>
      )}
      {stageNumber === 7 && (
        <>
          <MbtiStage7></MbtiStage7>
        </>
      )}
      {stageNumber === 8 && (
        <>
          <MbtiStage8></MbtiStage8>
        </>
      )}
      {stageNumber === 9 && (
        <>
          <MbtiStage9></MbtiStage9>
        </>
      )}
    </>
  );
};

export default MbtiArticle;
