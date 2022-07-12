import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import styled from 'styled-components';
import { mbtiCalculator } from 'utils/mbtiCalculator';
import { mbtiStageOneChecker } from 'utils/mbtiChecker';

const mbtiSlice = require('@slices/dummy/mbti/mbtiSlice');
const MbtiFooter = () => {
  const router = useRouter();
  const stageNumber: number = Number(router.asPath.split('/')[2]);
  const result = useSelector((state: RootState) => state.mbti.result);
  const stage1 = useSelector((state: RootState) => state.mbti.stage1);
  const dispatch = useDispatch();

  const pushNextPageUtils = () => {
    const pageNumber = stageNumber + 1;
    router.push(`/profile/${pageNumber}`);
  };

  const pushNextPage = (): void => {
    // if (stageNumber === 9) {
    //   mbtiChecker(result);
    //   const mbti = mbtiCalculator(result);
    //   dispatch(mbtiSlice.actions.setMbti({ mbti }));
    //   return;
    // }
    switch (stageNumber) {
      case 1:
        const result = mbtiStageOneChecker(stage1);
        if (result) {
          pushNextPageUtils();
          break;
        } else {
          alert('값을 입력해 주세요.');
          break;
        }
        break;
      case 2:
        console.log('2 대기중');
        break;
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
