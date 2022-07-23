import { addMbti } from '@slices/mbti/mbtiThunk';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store/store';
import styled from 'styled-components';
import { mbtiCalculator } from 'utils/mbtiCalculator';
import { useEffect, useCallback, useState } from 'react';
import { mbtiStageChecker } from 'utils/mbtiChecker';
import { ToastContainer, toast } from 'react-toastify';
import { mbtiSlice } from '@slices/mbti/mbtiSlice';
import axios from 'axios';
const MbtiFooter = () => {
  const router = useRouter();
  const stageNumber: number = Number(router.asPath.split('/')[2]);
  const mbti = useSelector((state: RootState) => state.mbti.mbti);
  const result = useSelector((state: RootState) => state.mbti.result);
  const stage1 = useSelector((state: RootState) => state.mbti.stage1);
  const stage2 = useSelector((state: RootState) => state.mbti.stage2);
  const stage3 = useSelector((state: RootState) => state.mbti.stage3);
  const stage4 = useSelector((state: RootState) => state.mbti.stage4);
  const stage5 = useSelector((state: RootState) => state.mbti.stage5);
  const stage6 = useSelector((state: RootState) => state.mbti.stage6);
  const stage7 = useSelector((state: RootState) => state.mbti.stage7);
  const stage8 = useSelector((state: RootState) => state.mbti.stage8);
  const stage9 = useSelector((state: RootState) => state.mbti.stage9);
  const dispatch = useAppDispatch();

  const pushNextPageUtils = () => {
    const pageNumber = stageNumber + 1;
    router.push(`/profile/${pageNumber}`);
  };

  const pushNextPage = (): void => {
    // if (stageNumber === 9) {
    //   mbtiChecker(result);
    // const mbti = mbtiCalculator(result);
    // dispatch(mbtiSlice.actions.setMbti({ mbti }));
    //   return;
    // }
    switch (stageNumber) {
      case 1:
        const result1 = mbtiStageChecker(stage1);
        if (result1) {
          pushNextPageUtils();
          break;
        } else {
          alert('값을 입력해주세요');
          break;
        }
      case 2:
        const result2 = mbtiStageChecker(stage2);
        if (result2) {
          pushNextPageUtils();
          break;
        } else {
          alert('값을 입력해주세요');
          break;
        }
      case 3:
        const result3 = mbtiStageChecker(stage3);
        if (result3) {
          pushNextPageUtils();
          break;
        } else {
          alert('값을 입력해주세요');
          break;
        }
      case 4:
        const result4 = mbtiStageChecker(stage4);
        if (result4) {
          pushNextPageUtils();
          break;
        } else {
          alert('값을 입력해주세요');
          break;
        }
      case 5:
        const result5 = mbtiStageChecker(stage5);
        if (result5) {
          pushNextPageUtils();
          break;
        } else {
          alert('값을 입력해주세요');
          break;
        }
      case 6:
        const result6 = mbtiStageChecker(stage6);
        if (result6) {
          pushNextPageUtils();
          break;
        } else {
          alert('값을 입력해주세요');
          break;
        }
      case 7:
        const result7 = mbtiStageChecker(stage7);
        if (result7) {
          pushNextPageUtils();
          break;
        } else {
          alert('값을 입력해주세요');
          break;
        }
      case 8:
        const result8 = mbtiStageChecker(stage8);
        if (result8) {
          pushNextPageUtils();
          break;
        } else {
          alert('값을 입력해주세요');
          break;
        }
      case 9:
        const result9 = mbtiStageChecker(stage9);
        if (result9) {
          const mbti = mbtiCalculator(result);
          // console.log('🔥🔥🔥', mbti);

          dispatch(mbtiSlice.actions.setMbti({ mbti })); // set front
          dispatch(addMbti({ mbti })); // set back db
          router.push(`/result/${mbti}`);

          break;
        } else {
          alert('값을 입력해주세요');
          break;
        }

      // case 9:
      //   const stageNineResult = mbtiStageNineChecker(finalResult);
      //   if (stageNineResult) {
      //     const mbti = mbtiCalculator(finalResult);
      //     const finalMbti = mbti.first + mbti.second + mbti.third + mbti.fourth;
      //     dispatch(mbtiSlice.actions.setMbti({ mbti }));
      //     break;
      //   }
      //   break;
      default:
        pushNextPageUtils();
    }
  };
  const pushPreviousPage = (): void => {
    const pageNumber = stageNumber - 1;
    router.push(`/profile/${pageNumber}`);
  };

  return (
    <>
      {stageNumber === 1 ? (
        <NextButton onClick={pushNextPage}>
          <NextButtonText>다음</NextButtonText>
        </NextButton>
      ) : (
        <>
          <PrevisouButton onClick={pushPreviousPage}>
            <PreviousButtonText>이전</PreviousButtonText>
          </PrevisouButton>
          <SmallNextButton onClick={pushNextPage}>
            <SmallNextButtonText>다음</SmallNextButtonText>
          </SmallNextButton>
        </>
      )}
    </>
  );
};

const NextButton = styled.button`
  position: absolute;
  width: 343px;
  height: 56px;
  left: 16px;
  top: 656px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--Main-color1);
`;

const NextButtonText = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height, or 100% */

  color: #ffffff;
`;

const PrevisouButton = styled.button`
  position: absolute;
  width: 100px;
  height: 56px;
  left: 16px;
  top: 656px;

  background: var(--grey-color2);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const PreviousButtonText = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  color: #ffffff;
`;

const SmallNextButton = styled.button`
  position: absolute;
  width: 231px;
  height: 56px;
  left: 128px;
  top: 656px;

  background: var(--Main-color1);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const SmallNextButtonText = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  color: #ffffff;
`;

export default MbtiFooter;
