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
import MbtiStage2 from './MbtiStage2';
import MbtiStage3 from './MbtiStage3';
import MbtiStage4 from './MbtiStage4';
const mbtiSlice = require('@slices/dummy/mbti/mbtiSlice');

const MbtiArticle = () => {
  const router = useRouter();
  const stageNumber: number = Number(router.asPath.split('/')[2]);
  const dispatch = useDispatch();
  const result = useSelector((state: RootState) => state.mbti.result);

  return (
    <>
      {stageNumber === 1 && (
        <>
          <MbtiStage1></MbtiStage1>
        </>
      )}
      {stageNumber === 2 && (
        <>
          <MbtiStage2></MbtiStage2>
        </>
      )}
      {stageNumber === 3 && (
        <>
          <MbtiStage3></MbtiStage3>
        </>
      )}
      {stageNumber === 4 && (
        <>
          <MbtiStage4></MbtiStage4>
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
