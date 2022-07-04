import { useRouter } from 'next/router';
import styled from 'styled-components';

const MbtiHeader = () => {
  // 주소창에서 숫자 받아 옴
  const router = useRouter();
  const loopNumber: number = Number(router.asPath.split('/')[2]);

  // 10보다 클 경우 다시 돌려보내기
  if (loopNumber >= 10) {
    router.push('/profile/1');
  }

  const QuestionNumber: string = `Q` + String(loopNumber) + '.';

  // 해당 값에 맞게 빈 배열 만들어서 랜더링 해주기
  const loopArray = Array.from({ length: loopNumber });

  return (
    <>
      <ProgressBar>
        {loopArray.map((r, i) => {
          return <ProgressBarUnit key={i} />;
        })}
      </ProgressBar>
      <MBTI>먹BTI</MBTI>
      <Description>
        먹BTI는 모무가 개발한 음식 선호 조사에요!
        <br />
        데이터 기반 먹BTI로 음식 취향 큐레이션을 받아보세요!
      </Description>
      <Br />
      <Question>{QuestionNumber}</Question>
    </>
  );
};

export const ProgressBarUnit = styled.div`
  width: 100%;
  background-color: var(--Main-color1);
`;

export const ProgressBar = styled.div<{ status?: string }>`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  background: var(--grey-color8);
  position: absolute;
  width: 343px;
  height: 8px;
  left: 16px;
  top: 48px;
`;

export const MBTI = styled.div`
  position: absolute;
  width: 78px;
  height: 38px;
  left: 16px;
  top: 128px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  color: var(--Main-color1);
`;

const Description = styled.div`
  position: absolute;
  width: 279px;
  height: 40px;
  left: 16px;
  top: 174px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: var(--grey-color3);
`;

const Br = styled.div`
  position: absolute;
  width: 343px;
  height: 0px;
  left: 16px;
  top: 230px;

  border: 1px solid var(--grey-color6);
`;
const Question = styled.div`
  position: absolute;
  width: 42px;
  height: 33px;
  left: 16px;
  top: 274px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  text-decoration-line: underline;

  color: #191919;

  color: var(--grey-color1);
`;

export default MbtiHeader;
