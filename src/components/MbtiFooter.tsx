import { useRouter } from 'next/router';
import styled from 'styled-components';

const MbtiFooter = () => {
  const router = useRouter();
  const stageNumber: number = Number(router.asPath.split('/')[2]);

  const pushNextPage = (): void => {
    const pageNumber = stageNumber + 1;
    router.push(`/profile/${pageNumber}`);
  };
  const pushPreviousPage = (): void => {
    const pageNumber = stageNumber - 1;
    router.push(`/profile/${pageNumber}`);
  };

  return (
    <>
      {stageNumber === 1 ? (
        <NextButton onClick={pushNextPage}>
          <NextButtonText>다음으로</NextButtonText>
        </NextButton>
      ) : (
        <>
          <PrevisouButton onClick={pushPreviousPage}>
            <PreviousButtonText>이전으로</PreviousButtonText>
          </PrevisouButton>
          <SmallNextButton onClick={pushNextPage}>
            <SmallNextButtonText>다음으로</SmallNextButtonText>
          </SmallNextButton>
        </>
      )}
    </>
  );
};

const NextButton = styled.button`
  position: absolute;
  width: 343px;
  height: 44px;
  left: 16px;
  top: 553px;

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
  color: #ffffff;
`;

const PrevisouButton = styled.button`
  position: absolute;
  width: 100px;
  height: 44px;
  left: 16px;
  top: 553px;

  background: #5f5f5f;

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
  height: 44px;
  left: 128px;
  top: 553px;

  background: #f57906;

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
